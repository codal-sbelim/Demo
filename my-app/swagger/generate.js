'use strict';
const https = require("http");
const fs = require("fs");
const CodeGen = require("swagger-js-codegen").CodeGen;
const ts = require('../node_modules/swagger-js-codegen/lib/typescript');
const path = require("path");
const commandLineArgs = require("command-line-args");
const appConfig = require("../config/app.config.js");
const optionDefinitions = [{
    name: 'use-local',
    type: Boolean
}];
const option = commandLineArgs(optionDefinitions, { partial: true });
const config = appConfig();

let services = [{
    'className': 'IntegrationAPI',
    'apiName': 'INT',
    'url': config.API_INT_URL,
    'path': '../src/common/swagger-providers/integration-api.provider.ts'
}];

/**
 * Gets JSON spec from a given host and path (url)
 * @param host
 * @param path
 * @param callback
 */
function getSpec(host, path, callback) {
    console.log("calling : >>>>> ", host + path);
    var noProtocolHost = host.match(/[http|https]:\/\/(.+)/)[1];
    console.log("noProtocolHost >>>> ", noProtocolHost);

    var options = {
        host: noProtocolHost,
        path: path
    };

    var req = https['get'](options, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            var data = null;
            var error = null;
            try {
                data = JSON.parse(body);
            } catch (e) {
                error = e;
            }
            callback(data, error);
        });
    });

    req.on('error', function(e) {
        callback(null, e);
    });
}

/**
 * Goes through the services and generate the corresponding
 * provider file.
 */
function generateProviderFiles() {
    for (let i = 0; i < services.length; i++) {
        generateProviderFile(services[i]);
    }
}

/**
 * Generates the provider file for the corresponding service
 * @param service
 */
function generateProviderFile(service) {
    if (option["use-local"] && fs.existsSync(path.join(__dirname, service.path)))
        return true;

    getSpec(service['url'], '/swagger', function(swagger, error) {
        if (error) console.log(error);
        handleSwaggerResponse(service, swagger);
    })
}

/**
 * Handles swagger response
 * @param serviceObject
 * @param swagger
 */
function handleSwaggerResponse(serviceObject, swagger) {
    var source = CodeGen.getCustomCode({
        moduleName: serviceObject['apiName'],
        className: serviceObject['className'],
        lint: false,
        swagger: swagger,
        template: getTemplatesObject(),
        apiName: serviceObject['apiName'],
        mustache: {
            getLowercaseMethod: function getCapitalMethod() {
                return function(val, render) {
                    return this.method.toLowerCase();
                }
            },
            hasResponseBody: function hasResponseBody() {
                return this.method.toLowerCase() !== 'delete';
            },
            getResponseType: function() {
                return function(val, render) {
                    // get the swagger definition for this calling context
                    var swaggerDef = swagger.paths[this.path][this.method.toLowerCase()];
                    return processSuccessResponses(swaggerDef, render);
                };
            },
            getName: function getName() {
                return function(val, render) {

                    var displayName = this.name;
                    // if property contains a hyphen, we quote the property so that
                    // we don't get JS error
                    if (this.name.match(/\-/)) {
                        displayName = '"' + this.name + '"';
                    }
                    return displayName;
                };
            },
            getApiUrl: function() {
                return function(val, render) {
                    return '"' + serviceObject['url'] + '"';
                }
            },
            getType: function getType() {
                function identity(x) {
                    return x;
                }
                return function _getType(val, render) {
                    if (this.tsType.isRef) {
                        return render(this.tsType.target);
                    }

                    if (this.tsType.isArray) {
                        return render('Array<' + _getType.call({ tsType: this.tsType.elementType }, null, identity) + '>');
                    }

                    if (this.tsType.isObject) {
                        return render('any');
                    }
                    return render(this.tsType.tsType);
                };
            },
            definitions: mapSwaggerDefinitions(swagger.definitions)
        }
    });
    // generate corresponding file
    fs.writeFileSync(path.join(__dirname, serviceObject['path']), source);
    console.log(serviceObject['className'] + ' file generated at ' + serviceObject['path']);
}

/**
 * Returns an object containing the class, method and request mustache template files
 * @returns {{class: (string|Buffer), method: (string|Buffer), request: (string|Buffer)}}
 */
function getTemplatesObject() {
    var templateDir = path.join(__dirname, 'templates');
    return {
        'class': fs.readFileSync(path.join(templateDir, 'class.mustache'), 'utf-8'),
        method: fs.readFileSync(path.join(templateDir, 'method.mustache'), 'utf-8'),
        request: fs.readFileSync(path.join(templateDir, 'request.mustache'), 'utf-8')
    };
}

/**
 * Maps swagger definitions
 * @param swaggerDefinitions
 * @returns {U[]|Array}
 */
function mapSwaggerDefinitions(swaggerDefinitions) {
    return Object.keys(swaggerDefinitions).map(function(defName) {
        var definition = swaggerDefinitions[defName];
        return {
            name: defName,
            properties: createPropertiesArray(definition, swaggerDefinitions)
        };
    })
}

function createPropertiesArray(definition, swaggerDefinitions) {
    if (definition.hasOwnProperty('allOf')) {
        let properties = [];
        definition.allOf.forEach(function(composingProperties) {
            // es una ref
            if (composingProperties.hasOwnProperty('$ref')) {
                let referenceDefinition = composingProperties['$ref'].replace('#/definitions/', '');
                let referendeDefinitionProperties = createPropertiesArray(swaggerDefinitions[referenceDefinition], swaggerDefinitions);
                debugger
                properties = properties.concat(referendeDefinitionProperties);
                return;
            }
            properties = properties.concat(createPropertiesArray(composingProperties, swaggerDefinitions));
            // es un array de props info
        }, this);
        return properties;
    }

    return Object.keys(definition.properties || {})
        .map(function mapProperties(propertyName) {
            return createPropertyObject(definition, propertyName);
        });
}

function createPropertyObject(definition, propertyName) {
    var property = definition.properties[propertyName];
    var prop = {
        name: propertyName,
        type: property.type,
        $ref: property.ref,
        cardinality: (definition.required || []).indexOf(propertyName) !== -1 ? '' : '?',
        items: property.items
    };
    prop.tsType = ts.convertType(prop);
    return prop;
}

/**
 * Process the success responses from swagger api
 * @param swaggerDef
 * @returns {*}
 */
function processSuccessResponses(swaggerDef, render) {
    var successResponseTypes = [];
    // check the success responses for type
    for (var responseCode in swaggerDef.responses) {
        if (responseCode >= 200 && responseCode <= 299) {
            // by default, the type is 'any'
            var successResponseType = 'any';
            var response = swaggerDef.responses[responseCode];

            // attempt to get the corresponding TS type
            if (response.schema) {
                var tsType = ts.convertType(response.schema);
                if (tsType.isRef) {
                    successResponseType = tsType.target + 'Wrapper';
                } else {
                    successResponseType = tsType.tsType === 'object' ? 'any' : tsType.tsType
                }
            }

            // use 'any' as the type instead of a type union, as 'any' includes everything
            if (successResponseType === 'any') {
                return render('any');
            }

            successResponseTypes.push(successResponseType);
        }
    }
    return render(successResponseTypes.join('|') || 'any');
}

generateProviderFiles();