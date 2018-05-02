//import * as moment from 'moment';
import * as clone from 'clone';

interface DateRange {
  startDate?: Date,
  endDate?: Date
}
const APP_CONFIG = {
    // API_CORE_URL: 'https://qa-503-core.callpotential.com',
    // API_LOC_URL: 'https://qa-503-loc.callpotential.com',
    // API_ACCT_URL: 'https://qa-503-acct.callpotential.com',
    API_INT_URL: 'https://qa-503-int.callpotential.com',
    // API_CALL_URL: 'https://qa-503-call.callpotential.com',
    // API_RPT_URL: 'https://qa-503-rpt.callpotential.com',
    // API_CHAT_URL: 'https://qa-503-chat.callpotential.com',
    // TWILIO_API_URL: 'https://api.twilio.com/2010-04-01/',
    ES_URL: 'https://e7cf70a9d4c5621274ba:2a8abacdc4@4f9d228b.qb0x.com:30780',
    homeUrl: 'https://qa-503.callpotential.com',
    APP_STACK: 'qa-503',
    TWILIO: {
        VOICE_URL: '/twilio/inbound.php',
        VOICE_FALLBACK_URL: 'http://twimlets.com/forward?PhoneNumber=%s',
        SMS_URL: '/twilio/sms-message-request',
        STATUS_URL: '/twilio/twilio_status_callback'
    },
    dateRanges: {
        CURRENT_MONTH: 'Current Month',
        CURRENT_QUARTER: 'Current Quarter',
        CURRENT_YEAR: 'Current Year',
        LAST_MONTH: 'Last Month',
        LAST_QUARTER: 'Last Quarter',
        LAST_YEAR: 'Last Year',
        CUSTOM_DATE: 'Custom Date'
    }
}

const DEFAULT_SORTING_ORDER: string = "ASC";

export class UtilsHelper {

  /**
   * Gets the cookie of a given name
   */
  public static getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
        while (c.charAt(0)==' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
        }
    }
    return "";
  }

  /**
   * Gets the session token id from the cp_session cookie
   */
  public static getSessionToken(): string {
    let token = null;
    let sessionCookie = UtilsHelper.getCookie('cp_session');
    sessionCookie = decodeURIComponent(sessionCookie);
    if (!sessionCookie) {
      console.error('No session cookie');
      window.location.href = window.location.origin;
    } else {
      let matches = sessionCookie.match(/a:4:\{s:10:"session_id";s:32:"(.+)";s:10:"ip_address";(.+)"/);
      if (matches && matches[1]) {
        token = matches[1];
      } else {
        console.error('No session cookie');
        window.location.href = window.location.origin;
      }
    }
    return token;
  }

  /**
  *
  * @param dateRange
  * @returns {{startDate: string, endDate: string}}
  */
//   public static getDateRange(dateRange: string): any {
//     let dateRangeObject: DateRange = {};
//     let startDate;
//     let endDate;

//     switch(dateRange) {
//       case APP_CONFIGAPP_CONFIG.dateRanges.CURRENT_MONTH:
//         startDate = moment().startOf('month');
//         endDate = moment().endOf('month');
//         break;
//       case APP_CONFIG.dateRanges.CURRENT_QUARTER:
//         startDate = moment().startOf('quarter');
//         endDate = moment().endOf('quarter');
//         break;
//       case APP_CONFIG.dateRanges.CURRENT_YEAR:
//         startDate = moment().startOf('year');
//         endDate = moment().endOf('year');
//         break;
//       case APP_CONFIG.dateRanges.LAST_MONTH:
//         startDate = moment().subtract(1, 'month').startOf('month');
//         endDate = moment().subtract(1, 'month').endOf('month');
//         break;
//       case APP_CONFIG.dateRanges.LAST_QUARTER:
//         startDate = moment().subtract(1, 'quarter').startOf('quarter');
//         endDate = moment().subtract(1, 'quarter').endOf('quarter');
//         break;
//       case APP_CONFIG.dateRanges.LAST_YEAR:
//         startDate = moment().subtract(1, 'year').startOf('year');
//         endDate = moment().subtract(1, 'year').endOf('year');
//         break;
//     }

//     dateRangeObject.startDate = startDate.toDate();
//     dateRangeObject.endDate = endDate.toDate();

//     return dateRangeObject;
//   }

  public static isValidDateRange(dateRange: string): boolean {
    dateRange = dateRange.toLowerCase();
    let dateRangeKeys = Object.keys(APP_CONFIG.dateRanges);
    let isValid: boolean = false;
    for (let key of dateRangeKeys) {
      if (APP_CONFIG.dateRanges[key].toLowerCase() === dateRange) {
        isValid = true;
        break;
      }
    }

    return isValid;
  }

  /**
   * Returns the height of a given tree, (node, children) structured.
   * @param node
   * @returns {number}
   */
  public static getTreeHeight(node: any) {
    if (!node.children.length) {
      return 1;
    } else {
      let height = 0;
      for (let i = 0; i < node.children.length; i++) {
        height = Math.max(height, UtilsHelper.getTreeHeight(node.children[i]));
      }
      return ++height;
    }
  }

  /**
   * Downloads the given blob file
   * @param blob
   * @param fileName
   */
  public static downloadFile(blob: Blob, fileName: string) {
    var anchor = document.createElement('a');
    let newBlob = new Blob([blob], {type: 'text/csv'})
    anchor.href = window.URL.createObjectURL(newBlob);
    anchor.target = '_blank';
    anchor.download = fileName + '.csv';
    anchor.click();
  }

  /**
   * Returns filename for reports download
   * @param fileName
   * @returns {string}
   */
  public static getReportFileName(fileName: string) {
    let date = new Date();
    return fileName.replace(/\s/g, '_') + date.getTime();
  }

  /**
   * Formats date from yyyy-mm-dd to mm/dd/yyyy
   * @param date
   */
//   public static formatDateForRequest(date: Date) {
//     return moment(date).format('MM/DD/Y');
//   }

  /**
   * Formats date from mm/dd/yyyy to yyyy-MM-dd
   * @param date
   */
//   public static formatDateForInput(date: Date) {
//     return moment(date).format('YYYY-MM-DD');
//   }


  /**
   * Returns the errors of a given form
   */
  public static getFormErrors(form: any, capitalize: boolean = true, customMessages: any = null) {
    let errors = [];

    for (let prop in form.controls) {
      let errorMessages = UtilsHelper.processFormErrors(form.controls[prop].errors, prop, capitalize);
      errors = errors.concat(errorMessages);
    }
    return errors;
  }

  /**
   * Processes the angular form errors and retrun the corresponding strings
   */
  public static processFormErrors(formErrors: any, field: string, capitalize: boolean = true, customMessages: any = null) {

    let errorMessages = {
      required: '{{field}} cannot be empty.',
      pattern: '{{field}} must be a number.'
    };
    if (customMessages) {
      errorMessages = customMessages;
    }
    let errors = [];
    for (let formError in formErrors) {
      if (errorMessages[formError]) {
        errors.push(errorMessages[formError].replace('{{field}}', UtilsHelper.humanize(field, '_', capitalize)));
      } else
        errors.push(formError);
    }
    return errors;
  }

  /**
   * From snake case to title casse
   * @param text
   * @param separator
   * @returns {string}
   */
  public static humanize(text: string, separator: string = '_',  capitalize: boolean = true) {
    let str = text.toLowerCase().split(separator).map(function(word) {

      if (capitalize) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }
      return word;
    });
    return str.join(' ');
  }

  /**
   * Gets the nested value of the given object that matches the path of the key given by key.key2.key3
   *
   * @param {string} key - the nested key path join by a .
   * @param {any} obj - the object to query
   * @return {any} Value found.
   */
  public static getDeepValue(key: string, obj: any): any {
    let value:any = clone(obj);
    let keys:Array<string> = key.split('.');
    let currentKey:string;

    while (keys.length) {
      currentKey = keys.shift();
      if (!value.hasOwnProperty(currentKey)) {
        value = undefined;
        break;
      }
      value = value[currentKey];
    }

    return value;
  }

  /**
   * Sort the given array of objects, using the given key as the value to sort and the order to decide how to order them
   *
   * @param {Array<any>} arrayToSort - The array of objects we want to sort
   * @param {string} key - The key of the object that we will use to get the value that we will be sorting by
   * @param {string} order - (optional) - If given it can be either "ASC" or "DESC" otherwise it will default to "ASC"
   * @return {Array<any>}
   */
  public static sortByKey(arrayToSort: Array<any>, key: string, order?: string): Array<any> {
    let sortedArray = [];
    let sortingOrder = "";

    if (key === "" || key === undefined) {
      return arrayToSort;
    }

    if (order === undefined) {
      order = DEFAULT_SORTING_ORDER;
    } else if (order.toUpperCase() !== "ASC" || order.toUpperCase() !== "DESC") {
      order = DEFAULT_SORTING_ORDER;
    }

    if (order === "ASC") {
      sortedArray = UtilsHelper.sortAscByKey(arrayToSort, key);
    } else {
      sortedArray = UtilsHelper.sortDescByKey(arrayToSort, key);
    }

    return sortedArray;
  }

  /**
   * Get call types
   */
  public static getCallTypes() {
    return [
      {
        key: 0,
        value: 'All'
      },
      {
        key: 'inbound_collection',
        value: 'Collection Inbound'
      },
      {
        key: 'outbound_collection',
        value: 'Collection Outbound'
      },
      {
        key: 'inbound_customer',
        value: 'Customer Inbound'
      },
      {
        key: 'outbound',
        value: 'Follow Up'
      },
      {
        key: 'inbound_lead',
        value: 'Lead Inbound'
      },
      {
        key: 'inbound_nolead',
        value: 'Non-Lead'
      },
      {
        key: 'inbound_payment',
        value: 'Payment Inbound'
      },
      {
        key: 'inbound',
        value: 'Unprocessed'
      }
    ];
  }

  /**
   * Sorths the given Array of objects in Ascending order using the key param to get the value from each Array's object.
   *
   * @param {Array<any>} unsortedArray - The Array we want to sort
   * @param {string} ket - The key of the object that will be used to pull the value that we will be sorting by.
   * @return {Array<any>}
   */
  public static sortAscByKey(unsortedArray: Array<any>, key: string): Array<any> {
    let sortedArray = unsortedArray.slice();

    sortedArray.sort( (a, b) => {
      let valueA = a[key];
      let valueB = b[key];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        valueA = valueA.toUpperCase();
        valueB = valueB.toUpperCase();

        if (valueA < valueB) {
          return -1;
        }

        if (valueA > valueB) {
          return 1;
        }

        return 0;
      }

      // default case for types different than numbers or strings
      return 0;
    });

    return sortedArray;
  }
  /**
   * Sorths the given Array of objects in Descending order using the key param to get the value from each Array's object.
   *
   * @param {Array<any>} unsortedArray - The Array we want to sort
   * @param {string} ket - The key of the object that will be used to pull the value that we will be sorting by.
   * @return {Array<any>}
   */
  public static sortDescByKey(unsortedArray, key): Array<any> {
   let sortedArray = unsortedArray.slice();

   sortedArray.sort( (a, b) => {
     let valueA = a[key];
     let valueB = b[key];

     if (typeof valueA === "number" && typeof valueB === "number") {
       return valueA - valueB;
     }

     if (typeof valueA === "string" && typeof valueB === "string") {
       valueA = valueA.toUpperCase();
       valueB = valueB.toUpperCase();

       if (valueA > valueB) {
         return -1;
       }

       if (valueA < valueB) {
         return 1;
       }

       return 0;
     }

     // default case for types different than numbers or strings
     return 0;
   });

   return sortedArray;
 }

  /**
   * Get the legacy url
   * @param {string} path
   * @return {string}
   */
  public static getLegacyUrl(path: string, prefix: string = ''): string {
    let base_url = '';
    if ('homeUrl' in APP_CONFIG && APP_CONFIG.homeUrl.length > 0) {
      base_url = APP_CONFIG.homeUrl;
    } else {
      if (!window.location.origin) {
        base_url = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      } else {
        base_url = window.location.origin;
      }
    }
    return base_url + prefix + path;
  }

  public static getTaskRouterTokenLambdaFunctionName(): string {
    let TRLambdaFunctionName: string = '_call-tr_token';
    if(APP_CONFIG.APP_STACK) {
      return `${APP_CONFIG.APP_STACK}${TRLambdaFunctionName}`;
    }
    throw new Error('APP_STACK config is not correctly defined');
  }

  /**
   * Convert Object to querystring
   * @param {any} object
   * @return {string}
   */
  public static objectToQueryString(object: any): string {
    let url = '?';
    for (var k in object) {
      if (object.hasOwnProperty(k)) {
        url+= `${k}=${object[k]}&`;
      }
    }
    url = url.substring(0, url.length-1);
    return url;
  }

  /**
   * Writes in key-value pair in local storage
   * @param {string} key - The name of the key to identify value
   * @param {any} value - Value that you want to store
   */
  public static writeToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Reads from local storage
   * @param {string} key - The name of the key to identify value that you need
   * @return {string} returns the key value
   */
  public static readLocalStorage(key: string): any {
    let storageValue = JSON.parse(localStorage.getItem(key));
    return storageValue;
  }

  /**
   * Deletes everything from local storage
   */
  public static clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * api type array
   */
  public static apiTypeArray(): object {
    return  {
      0 : { name: 'Stand Alone', api_code: 0, api_short: 'CP' },
      1 : { name: 'Sitelink', api_code: 1, api_short: 'SL' },
      2 : { name: 'Web self storage', api_code: 2, api_short: 'WSS' },
      3 : { name: 'Centershift', api_code: 3, api_short: 'CS' },
      4 : { name: 'Quikstor', api_code: 4, api_short: 'QS' },
      5 : { name: 'eDomico', api_code: 5, api_short: 'DI' },
      6 : { name: 'Doorswap', api_code: 6, api_short: 'DS' },
      7 : { name: 'Space Control', api_code: 7, api_short: 'SC' },
      8 : { name: 'Extraspace', api_code: 8, api_short: 'ES' }
    };
  };

  /**
   * transmit type array
   */
  public static transmitTypeArray(type): object {
    let arr;
    switch (type) {
      case 1:
         arr = { 1: { name: 'Inquiry', value: 1, short_name: 'INQ' }, 2: { name: 'Reservation', value: 2, short_name: 'RES' }, 3: { name: 'Move In', value: 3, short_name: 'MOV' }};
          break;
      case 3:
         arr = { 1: { name: 'Quote Only', value: 1, short_name: 'QO' }, 2: { name: 'Soft Reservation', value: 2, short_name: 'SR' }, 3: { name: 'Hard Reservation', value: 3, short_name: 'HR' }, 4: { name: 'Move In', value: 3, short_name: 'MOV' }};
          break;
      case 8:
         arr = { 1: { name: 'Quote Only', value: 1, short_name: 'QO' }, 2: { name: 'Soft Reservation', value: 2, short_name: 'SR' }, 3: { name: 'Hard Reservation', value: 3, short_name: 'HR' }};
          break;
      default:
         arr = {1: { name: 'Inquiry', value: 1, short_name: 'INQ' }, 2: { name: 'Reservation', value: 2, short_name: 'RES' }};
  }
  return arr;
  };

}
