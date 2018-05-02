import {
    HttpClient,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";
import {
    Observable
} from "rxjs/Observable";
import "rxjs/Rx";
import {
    Injectable
} from "@angular/core";
import 'rxjs/add/operator/map';

export interface Insurance {
    _id ? : string;
    location_id ? : number;
    user_id ? : number;
    name ? : string;
    insurance_id ? : string;
}

export interface InsuranceWrapper {
    body: Insurance,
        headers: HttpHeaders
}
export interface InsuranceList {
    property ? : Array < Insurance > ;
    paging ? : any;
}

export interface InsuranceListWrapper {
    body: InsuranceList,
        headers: HttpHeaders
}
export interface InsuranceBulkResultItem {
    message ? : string;
    data ? : Array < Insurance > ;
}

export interface InsuranceBulkResultItemWrapper {
    body: InsuranceBulkResultItem,
        headers: HttpHeaders
}
export interface InsuranceBulkResult {
    success ? : Array < string > ;
    error ? : Array < InsuranceBulkResultItem > ;
}

export interface InsuranceBulkResultWrapper {
    body: InsuranceBulkResult,
        headers: HttpHeaders
}
export interface InsuranceBulkResponse {
    status ? : string;
    data ? : Array < InsuranceBulkResult > ;
}

export interface InsuranceBulkResponseWrapper {
    body: InsuranceBulkResponse,
        headers: HttpHeaders
}
export interface SuccessResponse {
    status ? : string;
    message ? : string;
    data ? : Array < any > ;
}

export interface SuccessResponseWrapper {
    body: SuccessResponse,
        headers: HttpHeaders
}
export interface LeadPhoneList {
    items ? : Array < LeadPhone > ;
    paging ? : any;
}

export interface LeadPhoneListWrapper {
    body: LeadPhoneList,
        headers: HttpHeaders
}
export interface LeadNoteList {
    items ? : Array < LeadNote > ;
    paging ? : any;
}

export interface LeadNoteListWrapper {
    body: LeadNoteList,
        headers: HttpHeaders
}
export interface LeadList {
    items ? : Array < Lead > ;
    paging ? : any;
}

export interface LeadListWrapper {
    body: LeadList,
        headers: HttpHeaders
}
export interface LedgerNote {
    note_id ? : string;
    ledger_id ? : string;
    created ? : string;
    updated ? : string;
    note ? : string;
    employee_id ? : string;
    properties ? : any;
}

export interface LedgerNoteWrapper {
    body: LedgerNote,
        headers: HttpHeaders
}
export interface LedgerListData {
    firstname ? : string;
    lastname ? : string;
    next_due_date ? : string;
    days_past_due ? : string;
    phone ? : string;
    phone_type ? : string;
    next_collection_date ? : string;
    email ? : string;
    ledger_id ? : number;
    unit_id ? : string;
    paid_thru_date ? : string;
    amount_owed ? : string;
    status ? : string;
    last_payment_date ? : string;
    rent_rate ? : number;
    unit_name ? : string;
    properties ? : any;
}

export interface LedgerListDataWrapper {
    body: LedgerListData,
        headers: HttpHeaders
}
export interface LedgerNoteList {
    items ? : Array < LedgerNote > ;
    paging ? : any;
}

export interface LedgerNoteListWrapper {
    body: LedgerNoteList,
        headers: HttpHeaders
}
export interface LedgerNoteBulkResponse {
    items ? : Array < LedgerNote > ;
    paging ? : any;
}

export interface LedgerNoteBulkResponseWrapper {
    body: LedgerNoteBulkResponse,
        headers: HttpHeaders
}
export interface LedgerBulkResponse {
    items ? : Array < Ledger > ;
    paging ? : any;
}

export interface LedgerBulkResponseWrapper {
    body: LedgerBulkResponse,
        headers: HttpHeaders
}
export interface LedgerList {
    items ? : Array < LedgerListData > ;
    paging ? : any;
}

export interface LedgerListWrapper {
    body: LedgerList,
        headers: HttpHeaders
}
export interface Location {
    _id ? : string;
    location_id ? : number;
    user_id ? : number;
    credentials ? : any;
    cache ? : number;
    int_type ? : string;
}

export interface LocationWrapper {
    body: Location,
        headers: HttpHeaders
}
export interface Credentials {
    sCorpCode ? : string;
    sLocationCode ? : string;
    sCorpUserName ? : string;
    sCorpPassword ? : string;
    sSLToken ? : string;
    Username ? : string;
    Password ? : string;
    Location ? : string;
    CSUsername ? : string;
    CSPassword ? : string;
    CSSiteID ? : string;
    CSOrgID ? : string;
    CSApiUrl ? : string;
    CSChannel ? : string;
    QSUserName ? : string;
    QSPassword ? : string;
    QSSiteName ? : string;
    QSApiUrl ? : string;
    DIClientID ? : string;
    DIKey ? : string;
    DISiteID ? : string;
    DILocationCode ? : string;
    SCCompany ? : string;
    SCSiteID ? : string;
    SCAuthToken ? : string;
    DSUsername ? : string;
    DSPassword ? : string;
    DSFacilityID ? : string;
}

export interface CredentialsWrapper {
    body: Credentials,
        headers: HttpHeaders
}
export interface LocationList {
    items ? : Array < Location > ;
    paging ? : any;
}

export interface LocationListWrapper {
    body: LocationList,
        headers: HttpHeaders
}
export interface LocationBulkResultItem {
    message ? : string;
    data ? : Array < Location > ;
}

export interface LocationBulkResultItemWrapper {
    body: LocationBulkResultItem,
        headers: HttpHeaders
}
export interface LocationBulkResult {
    success ? : Array < number > ;
    error ? : Array < LocationBulkResultItem > ;
}

export interface LocationBulkResultWrapper {
    body: LocationBulkResult,
        headers: HttpHeaders
}
export interface LocationBulkResponse {
    status ? : string;
    data ? : Array < LocationBulkResult > ;
}

export interface LocationBulkResponseWrapper {
    body: LocationBulkResponse,
        headers: HttpHeaders
}
export interface Marketingsource {
    _id ? : string;
    location_id ? : number;
    marketing_id ? : number;
    site_id ? : string;
    description ? : string;
    last_updated ? : string;
}

export interface MarketingsourceWrapper {
    body: Marketingsource,
        headers: HttpHeaders
}
export interface MarketingsourceList {
    items ? : Array < Marketingsource > ;
    paging ? : any;
}

export interface MarketingsourceListWrapper {
    body: MarketingsourceList,
        headers: HttpHeaders
}
export interface MarketingsourceBulkResultItem {
    message ? : string;
    data ? : Array < Marketingsource > ;
}

export interface MarketingsourceBulkResultItemWrapper {
    body: MarketingsourceBulkResultItem,
        headers: HttpHeaders
}
export interface MarketingsourceBulkResult {
    success ? : Array < string > ;
    error ? : Array < MarketingsourceBulkResultItem > ;
}

export interface MarketingsourceBulkResultWrapper {
    body: MarketingsourceBulkResult,
        headers: HttpHeaders
}
export interface MarketingsourceBulkResponse {
    status ? : string;
    data ? : Array < MarketingsourceBulkResult > ;
}

export interface MarketingsourceBulkResponseWrapper {
    body: MarketingsourceBulkResponse,
        headers: HttpHeaders
}
export interface Promotion {
    _id ? : string;
    location_id ? : number;
    promotion_id ? : number;
    site_id ? : string;
    promotion_name ? : string;
    start_date ? : string;
    end_date ? : string;
}

export interface PromotionWrapper {
    body: Promotion,
        headers: HttpHeaders
}
export interface PromotionList {
    items ? : Array < Promotion > ;
    paging ? : any;
}

export interface PromotionListWrapper {
    body: PromotionList,
        headers: HttpHeaders
}
export interface PromotionBulkResultItem {
    message ? : string;
    data ? : Array < Promotion > ;
}

export interface PromotionBulkResultItemWrapper {
    body: PromotionBulkResultItem,
        headers: HttpHeaders
}
export interface PromotionBulkResult {
    success ? : Array < string > ;
    error ? : Array < PromotionBulkResultItem > ;
}

export interface PromotionBulkResultWrapper {
    body: PromotionBulkResult,
        headers: HttpHeaders
}
export interface PromotionBulkResponse {
    status ? : string;
    data ? : Array < PromotionBulkResult > ;
}

export interface PromotionBulkResponseWrapper {
    body: PromotionBulkResponse,
        headers: HttpHeaders
}
export interface promotionDelete {
    _id ? : string;
}

export interface promotionDeleteWrapper {
    body: promotionDelete,
        headers: HttpHeaders
}
export interface PromoUnit {
    location_id ? : number;
    unit_type_id ? : string;
    depth ? : number;
    height ? : number;
    width ? : number;
}

export interface PromoUnitWrapper {
    body: PromoUnit,
        headers: HttpHeaders
}
export interface PromoUnitsList {
    items ? : Array < PromoUnit > ;
    paging ? : any;
}

export interface PromoUnitsListWrapper {
    body: PromoUnitsList,
        headers: HttpHeaders
}
export interface SearchConfig {
    type ? : string;
    text ? : string;
    location_id ? : number;
    sort ? : string;
    limit ? : number;
}

export interface SearchConfigWrapper {
    body: SearchConfig,
        headers: HttpHeaders
}
export interface SearchResults {
    items ? : Array < any > ;
    total ? : number;
    max_score ? : number;
}

export interface SearchResultsWrapper {
    body: SearchResults,
        headers: HttpHeaders
}
export interface ErrorResponse {
    status ? : string;
    messages: Array < string > ;
    file ? : string;
    line ? : number;
    trace ? : Array < string > ;
}

export interface ErrorResponseWrapper {
    body: ErrorResponse,
        headers: HttpHeaders
}
export interface PagingData {
    currentPage ? : number;
    nextPage ? : number;
    prevPage ? : number;
    totalItems ? : number;
    totalPages ? : number;
    firstPage ? : number;
    lastPage ? : number;
}

export interface PagingDataWrapper {
    body: PagingData,
        headers: HttpHeaders
}
export interface TenantPhoneList {
    items ? : Array < TenantPhone > ;
    paging ? : any;
}

export interface TenantPhoneListWrapper {
    body: TenantPhoneList,
        headers: HttpHeaders
}
export interface TenantAdditionalInfo {
    customer_id ? : string;
    name ? : string;
    value ? : string;
    info_type ? : string;
    date_created ? : string;
    is_active ? : string;
}

export interface TenantAdditionalInfoWrapper {
    body: TenantAdditionalInfo,
        headers: HttpHeaders
}
export interface TenantAdditionalInfoList {
    items ? : Array < TenantAdditionalInfo > ;
    paging ? : any;
}

export interface TenantAdditionalInfoListWrapper {
    body: TenantAdditionalInfoList,
        headers: HttpHeaders
}
export interface TenantList {
    items ? : Array < Tenant > ;
    paging ? : any;
}

export interface TenantListWrapper {
    body: TenantList,
        headers: HttpHeaders
}
export interface Unit {
    _id ? : string;
    location_id ? : number;
    user_id ? : number;
    unit_type_name ? : string;
    unit_id ? : string;
    unit_name ? : string;
    status ? : string;
    width ? : number;
    length ? : number;
    rent_rate ? : number;
}

export interface UnitWrapper {
    body: Unit,
        headers: HttpHeaders
}
export interface UnitList {
    items ? : Array < Unit > ;
    paging ? : any;
}

export interface UnitListWrapper {
    body: UnitList,
        headers: HttpHeaders
}
export interface UnitBulkResultItem {
    message ? : string;
    data ? : Array < Unit > ;
}

export interface UnitBulkResultItemWrapper {
    body: UnitBulkResultItem,
        headers: HttpHeaders
}
export interface UnitBulkResult {
    success ? : Array < number > ;
    error ? : Array < UnitBulkResultItem > ;
}

export interface UnitBulkResultWrapper {
    body: UnitBulkResult,
        headers: HttpHeaders
}
export interface UnitBulkResponse {
    status ? : string;
    data ? : Array < UnitBulkResult > ;
}

export interface UnitBulkResponseWrapper {
    body: UnitBulkResponse,
        headers: HttpHeaders
}
export interface UnitInventoryData {
    unit_type_id ? : string;
    unit_type_name ? : string;
    size ? : Array < sizeList > ;
}

export interface UnitInventoryDataWrapper {
    body: UnitInventoryData,
        headers: HttpHeaders
}
export interface sizeList {
    width ? : string;
    length ? : string;
    total ? : string;
    qty_avail ? : string;
    specials ? : Array < specialsList > ;
    units ? : Array < unitList > ;
}

export interface sizeListWrapper {
    body: sizeList,
        headers: HttpHeaders
}
export interface specialsList {
    promotion_id ? : string;
    promotion_name ? : string;
    dcMaxOccPct ? : string;
    iExcludeIfLessThanUnitsTotal ? : string;
    iAvailableAt ? : string;
}

export interface specialsListWrapper {
    body: specialsList,
        headers: HttpHeaders
}
export interface unitList {
    width ? : string;
    length ? : string;
    push_rate ? : string;
    board_rate ? : string;
    unit_id ? : string;
    unit_type_id ? : string;
    tax_1_rate ? : string;
    tax_2_rate ? : string;
    moved_out ? : string;
    bRentable ? : string;
    bRented ? : string;
    unit_attr1 ? : string;
    Attribute01ValueID ? : string;
    unit_version ? : string;
    status ? : string;
    status_val ? : string;
}

export interface unitListWrapper {
    body: unitList,
        headers: HttpHeaders
}
export interface UnitInventoryList {
    items ? : Array < UnitInventoryData > ;
}

export interface UnitInventoryListWrapper {
    body: UnitInventoryList,
        headers: HttpHeaders
}
export interface unitTypeList {
    items ? : Array < UnitType > ;
    paging ? : any;
}

export interface unitTypeListWrapper {
    body: unitTypeList,
        headers: HttpHeaders
}
export interface unitTypeBulkResultItem {
    message ? : string;
    data ? : Array < UnitType > ;
}

export interface unitTypeBulkResultItemWrapper {
    body: unitTypeBulkResultItem,
        headers: HttpHeaders
}
export interface unitTypeBulkResult {
    success ? : Array < number > ;
    error ? : Array < unitTypeBulkResultItem > ;
}

export interface unitTypeBulkResultWrapper {
    body: unitTypeBulkResult,
        headers: HttpHeaders
}
export interface unitTypeBulkResponse {
    status ? : string;
    data ? : Array < unitTypeBulkResult > ;
}

export interface unitTypeBulkResponseWrapper {
    body: unitTypeBulkResponse,
        headers: HttpHeaders
}
export interface ReservedQuoted {
    unitName ? : string;
    standardRate ? : number;
    width ? : number;
    length ? : number;
    unitTypeId ? : number;
    unitId ? : string;
    adjustedPrice ? : number;
    discount ? : string;
    position ? : number;
    promotionName ? : string;
}

export interface ReservedQuotedWrapper {
    body: ReservedQuoted,
        headers: HttpHeaders
}
export interface Lead {
    _id ? : string;
    location_id ? : number;
    reservation_id ? : number;
    user_id ? : number;
    name ? : string;
    first_name ? : string;
    last_name ? : string;
    phone ? : string;
    mobile_phone ? : string;
    other_phone ? : string;
    email ? : string;
    source ? : string;
    daterented ? : string;
    date_needed ? : string;
    qt_rental_type ? : number;
    inquiry_type ? : number;
    marketing_source ? : number;
    rental_id ? : number;
    tenant_id ? : number;
    scomment ? : string;
    contact_date ? : string;
    reason ? : string;
    unit_id ? : string;
    unit_name ? : string;
    status ? : string;
    pcd_id ? : number;
    pcd_name ? : string;
    channel ? : number;
    callcard ? : string;
    script_card ? : string;
    follow_up ? : number;
    version ? : number;
    followups ? : number;
    parent_id ? : number;
    closed ? : number;
    unitrented ? : string;
    lastfollowup ? : string;
    date_removed ? : string;
    active ? : number;
    log_id ? : number;
    cancel_comment ? : string;
    employee_id ? : number;
    connection ? : number;
    competitor_id ? : number;
    call_result ? : string;
    call_result_offset ? : number;
    caller_type ? : string;
    calling_number ? : string;
    discount_plan_id ? : number;
    followup_rule_id ? : string;
    followup_rule_version ? : number;
    followup_rule_step ? : number;
    followup_rule_type ? : string;
    next_followup_date ? : string;
    auto_mode ? : number;
    is_instant ? : number;
    time ? : string;
    lead_source ? : number;
    sms_opt_out ? : number;
    opt_in_date ? : string;
    opt_in_msg ? : string;
    txt_consent ? : number;
    opt_in_txt ? : string;
    error ? : string;
    error_message ? : string;
    last_error_date ? : string;
    lead_uniqueid ? : string;
    is_assigned ? : number;
    closed_by_matching_with ? : string;
    created ? : string;
    excluded_on_request ? : number;
    lead_type ? : number;
    ad_id ? : string;
    ref_id ? : string;
    auth_id ? : string;
    custom_vars ? : string;
    account_class ? : string;
    posted_on_api ? : number;
    expire_date ? : string;
    dFollowup ? : string;
    last_note_sync ? : string;
    followup_next_skippable_step ? : number;
    unit_size ? : string;
    reserved_quoted ? : Array < ReservedQuoted > ;
    lead_phones ? : Array < LeadPhone > ;
    lead_notes ? : Array < LeadNote > ;
    properties ? : any;
}

export interface LeadWrapper {
    body: Lead,
        headers: HttpHeaders
}
export interface LeadHistoryList {
    items ? : Array < LeadHistory > ;
    paging ? : any;
}

export interface LeadHistoryListWrapper {
    body: LeadHistoryList,
        headers: HttpHeaders
}
export interface LeadHistory {
    _id ? : string;
    location_id ? : number;
    reservation_id ? : string;
    user_id ? : number;
    parentId ? : string;
    version ? : number;
    first_name ? : string;
    last_name ? : string;
    email ? : string;
    callcard ? : string;
    follow_up ? : number;
    source ? : string;
    inquiry_type ? : number;
    closed ? : number;
    daterented ? : string;
    unitrented ? : string;
    lastfollowup ? : string;
    active ? : number;
    reason ? : string;
    employee_id ? : number;
    competitor_id ? : number;
    date_needed ? : string;
    calling_number ? : string;
    marketing_source ? : number;
    qt_rental_type ? : number;
    followup_rule_id ? : number;
    followup_rule_version ? : number;
    followup_rule_step ? : number;
    followup_rule_type ? : string;
    next_followup_date ? : string;
    auto_mode ? : number;
    time ? : string;
    sms_opt_out ? : number;
    opt_in_date ? : string;
    opt_in_msg ? : string;
    txt_consent ? : number;
    opt_in_txt ? : number;
    date_updated ? : string;
    error ? : string;
    error_message ? : string;
    last_error_date ? : string;
    parent_id ? : number;
    transferred_to ? : number;
    transferred_by ? : number;
    tenant_id ? : number;
    log_id ? : number;
    lead_type ? : number;
}

export interface LeadHistoryWrapper {
    body: LeadHistory,
        headers: HttpHeaders
}
export interface LeadNote {
    note ? : string;
    reservation_id ? : string;
    date_created ? : string;
    added_by ? : number;
}

export interface LeadNoteWrapper {
    body: LeadNote,
        headers: HttpHeaders
}
export interface LeadPhone {
    phone_number ? : string;
    phone_type ? : string;
}

export interface LeadPhoneWrapper {
    body: LeadPhone,
        headers: HttpHeaders
}
export interface Ledger {
    ledger_id ? : number;
    unit_id ? : string;
    paid_thru_date ? : string;
    amount_owed ? : string;
    status ? : string;
    last_payment_date ? : string;
    rent_rate ? : number;
    unit_name ? : string;
    properties ? : any;
}

export interface LedgerWrapper {
    body: Ledger,
        headers: HttpHeaders
}
export interface Tenant {
    _id ? : string;
    location_id ? : number;
    user_id ? : number;
    site_id ? : number;
    customer_id ? : number;
    first_name ? : string;
    last_name ? : string;
    email ? : string;
    email2 ? : string;
    address1 ? : string;
    address2 ? : string;
    city ? : string;
    province ? : string;
    country ? : string;
    postal ? : string;
    is_excluded ? : number;
    sms_opt_out ? : number;
    auto_exclude ? : string;
    additional_api_fields ? : any;
    last_updated ? : string;
    excluded_on_request ? : string;
    ledgers ? : Array < any > ;
    phones ? : Array < any > ;
    properties ? : any;
}

export interface TenantWrapper {
    body: Tenant,
        headers: HttpHeaders
}
export interface TenantPhone {
    phone ? : string;
    phone_type ? : string;
    is_primary ? : number;
}

export interface TenantPhoneWrapper {
    body: TenantPhone,
        headers: HttpHeaders
}
export interface UnitType {
    location_id ? : number;
    type_name ? : string;
    user_id ? : number;
    is_active ? : number;
    date_created ? : number;
}

export interface UnitTypeWrapper {
    body: UnitType,
        headers: HttpHeaders
}

/**
 * 
 * @class IntegrationAPI
 * @param {(string)} [domainOrOptions] - The project domain.
 */
@Injectable()
export class IntegrationAPI {

    private domain: string;

    constructor(private http: HttpClient) { //had to include HTTP_PROVIDERS in bootstrap (global) for this to work. Workaround needed
        this.domain = "https://qa-503-int.callpotential.com";
    }

    /**
     * Handles api call error
     * @param {any} error
     * @returns {ErrorObservable}
     */
    private handleError(error: any) {
        let errMsg = error || {
            status: 500
        };
        return Observable.throw(errMsg);
    }

    /**
     * Set pattern type parameters
     * @param {string} pattern - the regex pattern
     * @returns {Object} the query parameters
     */
    private setPatternTypeParameter(pattern, queryParameters, parameters) {
        Object.keys(parameters).forEach(function(parameterName) {
            if (new RegExp(pattern).test(parameterName)) {
                queryParameters[parameterName] = parameters[parameterName];
            }
        });
        return queryParameters;
    }

    /**
     * Set pattern type parameters
     * @param {string} camelCaseName - the camel case name of the parameter
     * @param {string} name - the name of the parameter
     * @returns {Object} the query parameters
     */
    private setNonPatternTypeParameter(camelCaseName: string, name: string, queryParameters, parameters) {
        if (parameters[camelCaseName] !== undefined) {
            queryParameters[name] = parameters[camelCaseName];
        }
        return queryParameters;
    }

    /**
     * Returns the api call url
     * @param {string} path - the path of the endpoint
     * @param {Object} queryParameters - the corresponding query parameters
     * @returns {string} - the complete query api call url
     */
    private getUrl(path: string, queryParameters) {

        let paramsStr = Object.keys(queryParameters).map(function(key) {
            return key + '=' + encodeURIComponent(queryParameters[key]);
        }).join('&');

        let url = paramsStr ? this.domain + path + '?' + paramsStr : this.domain + path;
        return url;
    }

    /**
     * Returns the query parameters
     * @param {Object} parameters - the api call parameters
     * @param queryParameters - the corresponding query parameters
     * @returns {Object} - the query parameters of the api call
     */
    private setQueryParameters(parameters, queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            var parameter = parameters.$queryParameters[parameterName];
            queryParameters[parameterName] = parameter;
        });
        return queryParameters;
    }

    /**
     * Returns an insurance record based on a single ID
     * @method
     * @name IntegrationAPI#InsuranceGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of marketing source to fetch
     *
     */
    InsuranceGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < InsuranceWrapper > {
        let domain = this.domain;
        let path = '/insurance/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing insurance record
     * @method
     * @name IntegrationAPI#UpdateInsurance
     * @param {string} id - ID of insurance record
     * @param {string} authorization - Authorization token
     * @param {} body - insurance record
     *
     */
    UpdateInsurance(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : Insurance,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/insurance/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a Marketing source based on the ID supplied
     * @method
     * @name IntegrationAPI#DeleteInsurance
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of insurance to delete
     *
     */
    DeleteInsurance(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/insurance/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns insurance listing for given location
     * @method
     * @name IntegrationAPI#ListInsurance
     * @param {string} authorization - Authorization Token
     * @param {string} locationId - Location id to filter insurance
     * @param {boolean} skipCache - Will skip cache and fetch data from API
     * @param {boolean} forceCache - Will force cache and ignore data from API
     *
     */
    ListInsurance(parameters: {
        'authorization': string,
        'locationId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < InsuranceListWrapper > {
        let domain = this.domain;
        let path = '/insurance';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing insurance records
     * @method
     * @name IntegrationAPI#UpdateInsuranceBulk
     * @param {string} authorization - Authorization token
     * @param {} body - Insurance records
     *
     */
    UpdateInsuranceBulk(parameters: {
        'authorization': string,
        'body' ? : Array < Insurance > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/insurance';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new insurance
     * @method
     * @name IntegrationAPI#CreateInsurance
     * @param {} body - insurance record
     * @param {string} authorization - Authorization token
     *
     */
    CreateInsurance(parameters: {
        'body' ? : Insurance,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/insurance';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will bulk delete existing insurance
     * @method
     * @name IntegrationAPI#BulkDeleteInsurance
     * @param {string} authorization - Authorization token to identify user
     * @param {array} ids - JSON array string with id of records to be deleted
     *
     */
    BulkDeleteInsurance(parameters: {
        'authorization': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/insurance';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns a lead based on a single ID
     * @method
     * @name IntegrationAPI#LeadGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of lead to fetch
     *
     */
    LeadGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadWrapper > {
        let domain = this.domain;
        let path = '/lead/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Provide lead phone based on id provided
     * @method
     * @name IntegrationAPI#GetLeadPhoneById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which phone list is needed
     * @param {string} phoneId - Phone id
     *
     */
    GetLeadPhoneById(parameters: {
        'authorization': string,
        'leadId': string,
        'phoneId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadPhoneWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone/{phoneId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['phoneId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: phoneId'));
        //}

        path = path.replace(/{phoneId}/, parameters['phoneId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing lead phone
     * @method
     * @name IntegrationAPI#UpdateLeadPhoneById
     * @param {string} authorization - Authorization token
     * @param {string} leadId - Lead id for which phone needs to be updated
     * @param {string} phoneId - Phone id which is to be updated
     * @param {} body - Add new record
     *
     */
    UpdateLeadPhoneById(parameters: {
        'authorization': string,
        'leadId': string,
        'phoneId': string,
        'body': LeadPhone,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone/{phoneId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['phoneId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: phoneId'));
        //}

        path = path.replace(/{phoneId}/, parameters['phoneId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Delete phone details of provided id
     * @method
     * @name IntegrationAPI#DeleteLeadPhoneById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which phone list is needed
     * @param {string} phoneId - Phone id which is to be deleted
     *
     */
    DeleteLeadPhoneById(parameters: {
        'authorization': string,
        'leadId': string,
        'phoneId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadPhoneWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone/{phoneId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['phoneId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: phoneId'));
        //}

        path = path.replace(/{phoneId}/, parameters['phoneId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide lead note based on id provided
     * @method
     * @name IntegrationAPI#GetLeadNoteById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which note list is needed
     * @param {string} noteId - Note id
     *
     */
    GetLeadNoteById(parameters: {
        'authorization': string,
        'leadId': string,
        'noteId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadNoteWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note/{noteId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['noteId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: noteId'));
        //}

        path = path.replace(/{noteId}/, parameters['noteId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing lead note
     * @method
     * @name IntegrationAPI#UpdateLeadNoteById
     * @param {string} authorization - Authorization token
     * @param {string} leadId - Lead id for which note needs to be updated
     * @param {string} noteId - Note id which is to be updated
     * @param {} body - Add new record
     *
     */
    UpdateLeadNoteById(parameters: {
        'authorization': string,
        'leadId': string,
        'noteId': string,
        'body': LeadNote,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note/{noteId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['noteId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: noteId'));
        //}

        path = path.replace(/{noteId}/, parameters['noteId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Delete lead note based on id provided
     * @method
     * @name IntegrationAPI#DeleteLeadNoteById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which note list is needed
     * @param {string} noteId - Note id which is to be deleted
     *
     */
    DeleteLeadNoteById(parameters: {
        'authorization': string,
        'leadId': string,
        'noteId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadNoteWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note/{noteId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['noteId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: noteId'));
        //}

        path = path.replace(/{noteId}/, parameters['noteId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide list of leads based on location id provided
     * @method
     * @name IntegrationAPI#LeadPhoneList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which phone list is needed
     *
     */
    LeadPhoneList(parameters: {
        'authorization': string,
        'leadId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadPhoneListWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new lead phone
     * @method
     * @name IntegrationAPI#CreateLeadPhone
     * @param {string} authorization - Authorization token
     * @param {string} leadId - Lead id for which phone list is needed
     * @param {} body - Add new record
     *
     */
    CreateLeadPhone(parameters: {
        'authorization': string,
        'leadId': string,
        'body': Array < LeadPhone > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Delete phone of provided lead id
     * @method
     * @name IntegrationAPI#DeleteLeadPhone
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which phone list is needed
     * @param {array} ids - lead id which is going to be deleted
     *
     */
    DeleteLeadPhone(parameters: {
        'authorization': string,
        'leadId': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadPhoneWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/phone';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide list of leads based on location id provided
     * @method
     * @name IntegrationAPI#LeadNoteList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which phone list is needed
     *
     */
    LeadNoteList(parameters: {
        'authorization': string,
        'leadId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadNoteListWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new lead note
     * @method
     * @name IntegrationAPI#CreateLeadNote
     * @param {string} authorization - Authorization token
     * @param {string} leadId - Lead id for which phone list is needed
     * @param {} body - Add new record
     *
     */
    CreateLeadNote(parameters: {
        'authorization': string,
        'leadId': string,
        'body': Array < LeadNote > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Delete lead note based on id provided
     * @method
     * @name IntegrationAPI#DeleteLeadNote
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - Lead id for which note list is needed
     * @param {array} ids - lead id which is going to be deleted
     *
     */
    DeleteLeadNote(parameters: {
        'authorization': string,
        'leadId': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadNoteWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}/note';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide list of leads based on location id provided
     * @method
     * @name IntegrationAPI#LeadList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} locationId - Location id for which leads are to be listed
     * @param {string} listType - Fetch followup leads list
     * @param {string} leadId - Lead id
     * @param {string} customerPhone - Customer phone
     * @param {string} customerEmail - Customer email
     * @param {string} customerName - Customer name
     * @param {string} unit - Unit name
     * @param {string} filterActive - filter on active boolean field
     * @param {boolean} skipCache - Skip cache and fetch data from api endpoint
     * @param {boolean} forceCache - Foce data to fetch from cache
     * @param {string} page - Page Number or false for all items
     * @param {integer} perPage - maximum number of results to return
     *
     */
    LeadList(parameters: {
        'authorization': string,
        'locationId': string,
        'listType' ? : "all" | "followup",
        'leadId' ? : string,
        'customerPhone' ? : string,
        'customerEmail' ? : string,
        'customerName' ? : string,
        'unit' ? : string,
        'filterActive' ? : "true" | "false",
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        'page': string,
        'perPage' ? : number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadListWrapper > {
        let domain = this.domain;
        let path = '/lead';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('listType', 'listType', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('leadId', 'leadId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('customerPhone', 'customerPhone', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('customerEmail', 'customerEmail', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('customerName', 'customerName', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('unit', 'unit', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('filterActive', 'filterActive', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        //TODO check if param is required in header or body
        //if(parameters['page'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: page'));
        //}

        queryParameters = this.setNonPatternTypeParameter('page', 'page', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('perPage', 'perPage', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new lead
     * @method
     * @name IntegrationAPI#CreateLead
     * @param {string} authorization - Authorization token
     * @param {} body - Add new record
     *
     */
    CreateLead(parameters: {
        'authorization': string,
        'body': Lead,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will delete existing lead
     * @method
     * @name IntegrationAPI#DeleteLeadBulk
     * @param {string} authorization - Authorization token to identify user
     * @param {array} ids - JSON array string with id of records to be deleted
     *
     */
    DeleteLeadBulk(parameters: {
        'authorization': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Will edit existing lead
     * @method
     * @name IntegrationAPI#UpdateLeadById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - lead id which is going to be updated
     * @param {} body - Fields required to edit
     *
     */
    UpdateLeadById(parameters: {
        'authorization': string,
        'leadId': string,
        'body': Lead,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < SuccessResponseWrapper > {
        let domain = this.domain;
        let path = '/lead/{leadId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will delete existing lead
     * @method
     * @name IntegrationAPI#DeleteLeadById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} leadId - lead id which is going to be deleted
     *
     */
    DeleteLeadById(parameters: {
        'authorization': string,
        'leadId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/lead/{leadId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['leadId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: leadId'));
        //}

        path = path.replace(/{leadId}/, parameters['leadId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Return lead history data from elastic search
     * @method
     * @name IntegrationAPI#GetLaedHistoryById
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {integer} id - Loation id for which lead history is required
     *
     */
    GetLaedHistoryById(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadHistoryListWrapper > {
        let domain = this.domain;
        let path = '/leadhistory/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will add new lead histrory data and map it with the lead
     * @method
     * @name IntegrationAPI#UpdateLeadHistoryById
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {string} id - Lead history id for which record needs to be updated
     * @param {} body - Lead history data
     *
     */
    UpdateLeadHistoryById(parameters: {
        'authorization': string,
        'id': string,
        'body': LeadHistory,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadHistoryListWrapper > {
        let domain = this.domain;
        let path = '/leadhistory/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will add new lead histrory data and map it with the lead
     * @method
     * @name IntegrationAPI#DeleteLeadHistoryById
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {string} id - Lead history id for which record needs to be updated
     *
     */
    DeleteLeadHistoryById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/leadhistory/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Return all lead history data from elastic search
     * @method
     * @name IntegrationAPI#GetLeadHistoryList
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {integer} locationId - Loation id for which lead history is required
     *
     */
    GetLeadHistoryList(parameters: {
        'authorization': string,
        'locationId': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadHistoryWrapper > {
        let domain = this.domain;
        let path = '/leadhistory';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will add new lead histrory data and map it with the lead
     * @method
     * @name IntegrationAPI#AddLeadHistory
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {} body - Lead history data
     *
     */
    AddLeadHistory(parameters: {
        'authorization': string,
        'body': Array < LeadHistory > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LeadHistoryListWrapper > {
        let domain = this.domain;
        let path = '/leadhistory';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will add new lead histrory data and map it with the lead
     * @method
     * @name IntegrationAPI#DeleteLeadHistoryBulk
     * @param {string} authorization - Authorization token to access lead histroy data
     * @param {string} id - Lead history id for which record needs to be updated
     * @param {array} ids - Lead history data
     *
     */
    DeleteLeadHistoryBulk(parameters: {
        'authorization': string,
        'id': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/leadhistory';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns a ledger based on a single ID
     * @method
     * @name IntegrationAPI#GetLedgerById
     * @param {string} authorization - Authorization token
     * @param {string} ledgerId - ID of ledger to fetch
     * @param {string} locationId - Location ID
     *
     */
    GetLedgerById(parameters: {
        'authorization': string,
        'ledgerId': string,
        'locationId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LedgerWrapper > {
        let domain = this.domain;
        let path = '/ledger/{ledgerId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ledgerId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ledgerId'));
        //}

        path = path.replace(/{ledgerId}/, parameters['ledgerId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a ledger based on the Id
     * @method
     * @name IntegrationAPI#DeleteLedger
     * @param {string} authorization - Authorization token
     * @param {integer} ledgerId - ID of ledger to delete
     * @param {integer} locationId - Location id for ledger
     *
     */
    DeleteLedger(parameters: {
        'authorization': string,
        'ledgerId': number,
        'locationId': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/ledger/{ledgerId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ledgerId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ledgerId'));
        //}

        path = path.replace(/{ledgerId}/, parameters['ledgerId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide list of notes based on ledger provided
     * @method
     * @name IntegrationAPI#ListLedgerNotes
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - Tenant ID
     * @param {string} ledgerId - Ledger ID
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     *
     */
    ListLedgerNotes(parameters: {
        'authorization': string,
        'tenantId': string,
        'ledgerId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LedgerNoteListWrapper > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger/{ledgerId}/note';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ledgerId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ledgerId'));
        //}

        path = path.replace(/{ledgerId}/, parameters['ledgerId'].toString());

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new ledger note
     * @method
     * @name IntegrationAPI#CreateLedgerNote
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - Tenant Id
     * @param {string} ledgerId - Ledger Id
     * @param {} body - Ledger note
     *
     */
    CreateLedgerNote(parameters: {
        'authorization': string,
        'tenantId': string,
        'ledgerId': string,
        'body' ? : LedgerNote,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger/{ledgerId}/note';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ledgerId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ledgerId'));
        //}

        path = path.replace(/{ledgerId}/, parameters['ledgerId'].toString());

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns ledger listing
     * @method
     * @name IntegrationAPI#ListLedgers
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     * @param {string} filterType - Filter customer type
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     * @param {string} page - Page Number or false for all items
     * @param {integer} perPage - maximum number of results to return
     *
     */
    ListLedgers(parameters: {
        'authorization': string,
        'locationId': string,
        'filterType' ? : "All" | "Current" | "Delinquent",
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        'page': string,
        'perPage' ? : number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LedgerListWrapper > {
        let domain = this.domain;
        let path = '/ledger';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('filterType', 'filterType', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        //TODO check if param is required in header or body
        //if(parameters['page'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: page'));
        //}

        queryParameters = this.setNonPatternTypeParameter('page', 'page', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('perPage', 'perPage', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns ledger listing
     * @method
     * @name IntegrationAPI#ListLedgersByTenant
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - Tenant ID
     *
     */
    ListLedgersByTenant(parameters: {
        'authorization': string,
        'tenantId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LedgerListWrapper > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update ledger
     * @method
     * @name IntegrationAPI#UpdateLedgerBulk
     * @param {string} tenantId - ID of tenant
     * @param {string} authorization - Authorization token
     * @param {} body - Ledger record
     *
     */
    UpdateLedgerBulk(parameters: {
        'tenantId': string,
        'authorization': string,
        'body' ? : Ledger,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new ledger
     * @method
     * @name IntegrationAPI#CreateLedger
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - ID of tenant
     * @param {} body - Ledger record
     *
     */
    CreateLedger(parameters: {
        'authorization': string,
        'tenantId': string,
        'body' ? : Ledger,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing ledger
     * @method
     * @name IntegrationAPI#UpdateLedgerById
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - ID of tenant
     * @param {string} ledgerId - ID of ledger
     * @param {} body - Ledger record
     *
     */
    UpdateLedgerById(parameters: {
        'authorization': string,
        'tenantId': string,
        'ledgerId': string,
        'body' ? : Ledger,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/ledger/{ledgerId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['ledgerId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ledgerId'));
        //}

        path = path.replace(/{ledgerId}/, parameters['ledgerId'].toString());

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns a Location based on a single ID
     * @method
     * @name IntegrationAPI#LocationGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of Location to fetch
     *
     */
    LocationGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LocationWrapper > {
        let domain = this.domain;
        let path = '/location/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing location
     * @method
     * @name IntegrationAPI#UpdateLocation
     * @param {string} id - ID of location
     * @param {string} authorization - Authorization token
     * @param {} body - location record
     *
     */
    UpdateLocation(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : Location,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/location/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a location based on the ID supplied
     * @method
     * @name IntegrationAPI#DeleteLocation
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of location to delete
     *
     */
    DeleteLocation(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/location/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns Location listing
     * @method
     * @name IntegrationAPI#ListLocations
     * @param {string} authorization - Authorization token
     *
     */
    ListLocations(parameters: {
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < LocationListWrapper > {
        let domain = this.domain;
        let path = '/location';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing locations
     * @method
     * @name IntegrationAPI#UpdateLocationsBulk
     * @param {string} authorization - Authorization token
     * @param {} body - location record
     *
     */
    UpdateLocationsBulk(parameters: {
        'authorization': string,
        'body' ? : Array < Location > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/location';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new Location
     * @method
     * @name IntegrationAPI#CreateLocation
     * @param {} body - Location record
     * @param {string} authorization - Authorization token
     *
     */
    CreateLocation(parameters: {
        'body' ? : Location,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/location';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns a marketing source based on a single ID
     * @method
     * @name IntegrationAPI#MarketingsourceGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of marketing source to fetch
     *
     */
    MarketingsourceGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < MarketingsourceWrapper > {
        let domain = this.domain;
        let path = '/marketingsource/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing Marketing source
     * @method
     * @name IntegrationAPI#UpdateMarketingsource
     * @param {string} id - ID of Marketing source
     * @param {string} authorization - Authorization token
     * @param {} body - Marketing source record
     *
     */
    UpdateMarketingsource(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : Marketingsource,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/marketingsource/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a Marketing source based on the ID supplied
     * @method
     * @name IntegrationAPI#DeleteMarketingsource
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of Marketing source to delete
     *
     */
    DeleteMarketingsource(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/marketingsource/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns Marketing sources listing
     * @method
     * @name IntegrationAPI#ListMarketingSource
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     *
     */
    ListMarketingSource(parameters: {
        'authorization': string,
        'locationId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < MarketingsourceListWrapper > {
        let domain = this.domain;
        let path = '/marketingsource';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing Marketing sources
     * @method
     * @name IntegrationAPI#UpdateMarketingsourceBulk
     * @param {string} authorization - Authorization token
     * @param {} body - Marketing source records
     *
     */
    UpdateMarketingsourceBulk(parameters: {
        'authorization': string,
        'body' ? : Array < Marketingsource > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/marketingsource';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new Marketing source
     * @method
     * @name IntegrationAPI#CreateMarketingsource
     * @param {} body - Marketing source record
     * @param {string} authorization - Authorization token
     *
     */
    CreateMarketingsource(parameters: {
        'body' ? : Marketingsource,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/marketingsource';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will bulk delete existing marketing source
     * @method
     * @name IntegrationAPI#DeleteMarketingsourceBulk
     * @param {string} authorization - Authorization token to identify user
     * @param {array} ids - JSON array string with id of records to be deleted
     *
     */
    DeleteMarketingsourceBulk(parameters: {
        'authorization': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/marketingsource';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns a promotion based on a single ID
     * @method
     * @name IntegrationAPI#PromotionGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of unit to fetch
     *
     */
    PromotionGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < PromotionWrapper > {
        let domain = this.domain;
        let path = '/promotion/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing promotion
     * @method
     * @name IntegrationAPI#UpdatePromotion
     * @param {string} id - ID of promotion
     * @param {string} authorization - Authorization token
     * @param {} body - promotion record
     *
     */
    UpdatePromotion(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : Promotion,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a promotion based on the ID supplied
     * @method
     * @name IntegrationAPI#DeletePromotion
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of promotion to delete
     *
     */
    DeletePromotion(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide promotion unit based on id provided
     * @method
     * @name IntegrationAPI#GetPromotionUnitById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} promoId - Promotion id for which unit list is needed
     * @param {string} unitId - Unit type id
     *
     */
    GetPromotionUnitById(parameters: {
        'authorization': string,
        'promoId': string,
        'unitId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < PromoUnitWrapper > {
        let domain = this.domain;
        let path = '/promotion/{promoId}/unit/{unitId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['promoId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: promoId'));
        //}

        path = path.replace(/{promoId}/, parameters['promoId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['unitId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: unitId'));
        //}

        path = path.replace(/{unitId}/, parameters['unitId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing Promo unit
     * @method
     * @name IntegrationAPI#UpdatePromoUnitById
     * @param {string} authorization - Authorization token
     * @param {string} promoId - Promo id for which unit needs to be updated
     * @param {string} unitId - Unit id which is to be updated
     * @param {} body - Add new record
     *
     */
    UpdatePromoUnitById(parameters: {
        'authorization': string,
        'promoId': string,
        'unitId': string,
        'body': PromoUnit,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion/{promoId}/unit/{unitId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['promoId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: promoId'));
        //}

        path = path.replace(/{promoId}/, parameters['promoId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['unitId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: unitId'));
        //}

        path = path.replace(/{unitId}/, parameters['unitId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Delete prono unit details of provided id
     * @method
     * @name IntegrationAPI#DeletePromoUnitById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} promoId - Promotion id for which units list is needed
     * @param {string} unitId - Unit id which is to be deleted
     *
     */
    DeletePromoUnitById(parameters: {
        'authorization': string,
        'promoId': string,
        'unitId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < PromoUnitWrapper > {
        let domain = this.domain;
        let path = '/promotion/{promoId}/unit/{unitId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['promoId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: promoId'));
        //}

        path = path.replace(/{promoId}/, parameters['promoId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['unitId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: unitId'));
        //}

        path = path.replace(/{unitId}/, parameters['unitId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns promotion listing
     * @method
     * @name IntegrationAPI#ListPromotions
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     *
     */
    ListPromotions(parameters: {
        'authorization': string,
        'locationId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < PromotionListWrapper > {
        let domain = this.domain;
        let path = '/promotion';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing promotions
     * @method
     * @name IntegrationAPI#UpdatePromotionBulk
     * @param {string} authorization - Authorization token
     * @param {} body - promotion type record
     *
     */
    UpdatePromotionBulk(parameters: {
        'authorization': string,
        'body' ? : Array < Promotion > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new promotion
     * @method
     * @name IntegrationAPI#CreatePromotion
     * @param {} body - Ad record
     * @param {string} authorization - Authorization token
     *
     */
    CreatePromotion(parameters: {
        'body' ? : Promotion,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will bulk delete existing promotion
     * @method
     * @name IntegrationAPI#DeletePromotionBulk
     * @param {string} authorization - Authorization token to identify user
     * @param {array} ids - JSON array string with id of records to be deleted
     *
     */
    DeletePromotionBulk(parameters: {
        'authorization': string,
        'ids': Array < number > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['ids'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: ids'));
        //}

        queryParameters = this.setNonPatternTypeParameter('ids', 'ids', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Provide list of units based on promotion id provided
     * @method
     * @name IntegrationAPI#PromoUnitList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} promoId - promoId for which phone list is needed
     *
     */
    PromoUnitList(parameters: {
        'authorization': string,
        'promoId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < PromoUnitsListWrapper > {
        let domain = this.domain;
        let path = '/promotion/{promoId}/unit';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['promoId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: promoId'));
        //}

        path = path.replace(/{promoId}/, parameters['promoId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new promo unit
     * @method
     * @name IntegrationAPI#CreatePromoUnit
     * @param {string} authorization - Authorization token
     * @param {string} promoId - Promo id for which unit is created
     * @param {} body - Add new record
     *
     */
    CreatePromoUnit(parameters: {
        'authorization': string,
        'promoId': string,
        'body': PromoUnit,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/promotion/{promoId}/unit';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['promoId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: promoId'));
        //}

        path = path.replace(/{promoId}/, parameters['promoId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Provide search result for leads
     * @method
     * @name IntegrationAPI#Search
     * @param {string} authorization - Authorization token to identify user
     * @param {} body - Execute search
     *
     */
    Search(parameters: {
        'authorization': string,
        'body': SearchConfig,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < SearchResultsWrapper > {
        let domain = this.domain;
        let path = '/search';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns a tenant based on a single ID
     * @method
     * @name IntegrationAPI#TenantGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of tenant to fetch
     *
     */
    TenantGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < TenantWrapper > {
        let domain = this.domain;
        let path = '/tenant/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * List additional info for provided tenant id
     * @method
     * @name IntegrationAPI#TenantAdditionalInfo
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - Tenant id for which additional info is needed
     *
     */
    TenantAdditionalInfo(parameters: {
        'authorization': string,
        'tenantId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < TenantAdditionalInfoListWrapper > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/additional_info';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new tenant phone
     * @method
     * @name IntegrationAPI#AddAdditonalInfo
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - Tenat id whose additonal info needs to be stored
     * @param {} body - Add new record
     *
     */
    AddAdditonalInfo(parameters: {
        'authorization': string,
        'tenantId': string,
        'body': TenantAdditionalInfo,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/additional_info';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Provide list of tenants based on location id provided
     * @method
     * @name IntegrationAPI#TenantPhoneList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - Tenant id for which phone list is needed
     *
     */
    TenantPhoneList(parameters: {
        'authorization': string,
        'tenantId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < TenantPhoneListWrapper > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/phone';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new tenant phone
     * @method
     * @name IntegrationAPI#CreateTenantPhone
     * @param {string} authorization - Authorization token
     * @param {string} tenantId - Tenant id for which phone list is needed
     * @param {} body - Add new record
     *
     */
    CreateTenantPhone(parameters: {
        'authorization': string,
        'tenantId': string,
        'body': TenantPhone,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/phone';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Provide list of tenants based on location id provided
     * @method
     * @name IntegrationAPI#TenantList
     * @param {string} authorization - Authorization token to identify user
     * @param {string} locationId - Location id for which tenants are to be listed
     * @param {string} filterType - Filter customer type
     * @param {boolean} skipCache - Skip cache and fetch data from api endpoint
     * @param {boolean} forceCache - Foce data to fetch from cache
     * @param {string} search - Search string to search in tenant records
     * @param {string} page - Page Number or false for all items
     * @param {integer} perPage - maximum number of results to return
     *
     */
    TenantList(parameters: {
        'authorization': string,
        'locationId': string,
        'filterType' ? : "All" | "Current" | "Delinquent",
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        'search' ? : string,
        'page': string,
        'perPage' ? : number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < TenantListWrapper > {
        let domain = this.domain;
        let path = '/tenant';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('filterType', 'filterType', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('search', 'search', queryParameters, parameters);

        //TODO check if param is required in header or body
        //if(parameters['page'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: page'));
        //}

        queryParameters = this.setNonPatternTypeParameter('page', 'page', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('perPage', 'perPage', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new tenant
     * @method
     * @name IntegrationAPI#CreateTenant
     * @param {string} authorization - Authorization token
     * @param {} body - Add new record
     *
     */
    CreateTenant(parameters: {
        'authorization': string,
        'body': Tenant,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will edit existing tenant
     * @method
     * @name IntegrationAPI#UpdateTenantById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - tenant id which is going to be updated
     * @param {} body - Fields required to edit
     *
     */
    UpdateTenantById(parameters: {
        'authorization': string,
        'tenantId': string,
        'body': Tenant,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < SuccessResponseWrapper > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['body'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: body'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Will delete existing tenant
     * @method
     * @name IntegrationAPI#DeleteTenantById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - tenant id which is going to be deleted
     *
     */
    DeleteTenantById(parameters: {
        'authorization': string,
        'tenantId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Will delete existing tenant
     * @method
     * @name IntegrationAPI#DeleteTenantAdditionalInfoById
     * @param {string} authorization - Authorization token to identify user
     * @param {string} tenantId - Tenant id whoes info will be delete
     * @param {string} value - Value which needs to be deleted
     *
     */
    DeleteTenantAdditionalInfoById(parameters: {
        'authorization': string,
        'tenantId': string,
        'value': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/tenant/{tenantId}/additional_info/{value}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['tenantId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: tenantId'));
        //}

        path = path.replace(/{tenantId}/, parameters['tenantId'].toString());

        //TODO check if param is required in header or body
        //if(parameters['value'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: value'));
        //}

        path = path.replace(/{value}/, parameters['value'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns a unit based on a single ID
     * @method
     * @name IntegrationAPI#UnitGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of unit to fetch
     *
     */
    UnitGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < UnitWrapper > {
        let domain = this.domain;
        let path = '/unit/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing unit
     * @method
     * @name IntegrationAPI#UpdateUnit
     * @param {string} id - ID of unit
     * @param {string} authorization - Authorization token
     * @param {} body - Unit record
     *
     */
    UpdateUnit(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : Unit,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unit/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a unit based on the ID supplied
     * @method
     * @name IntegrationAPI#DeleteUnit
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of unit to delete
     *
     */
    DeleteUnit(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unit/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns unit listing
     * @method
     * @name IntegrationAPI#ListUnits
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     *
     */
    ListUnits(parameters: {
        'authorization': string,
        'locationId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < UnitListWrapper > {
        let domain = this.domain;
        let path = '/unit';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing units
     * @method
     * @name IntegrationAPI#UpdateUnitBulk
     * @param {string} authorization - Authorization token
     * @param {} body - Unit type record
     *
     */
    UpdateUnitBulk(parameters: {
        'authorization': string,
        'body' ? : Array < Unit > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unit';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new unit
     * @method
     * @name IntegrationAPI#CreateUnit
     * @param {} body - Ad record
     * @param {string} authorization - Authorization token
     *
     */
    CreateUnit(parameters: {
        'body' ? : Unit,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unit';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns unit inventory listing
     * @method
     * @name IntegrationAPI#ListUnitsInventory
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     *
     */
    ListUnitsInventory(parameters: {
        'authorization': string,
        'locationId': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < UnitInventoryListWrapper > {
        let domain = this.domain;
        let path = '/unitinventory';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Returns a unit type based on a single ID
     * @method
     * @name IntegrationAPI#UnitTypeGetById
     * @param {string} authorization - Authorization token
     * @param {string} id - ID of unit type to fetch
     *
     */
    UnitTypeGetById(parameters: {
        'authorization': string,
        'id': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < UnitTypeWrapper > {
        let domain = this.domain;
        let path = '/unittype/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Update existing unit type
     * @method
     * @name IntegrationAPI#UpdateUnitType
     * @param {string} id - ID of unit type
     * @param {string} authorization - Authorization token
     * @param {} body - Unit record
     *
     */
    UpdateUnitType(parameters: {
        'id': string,
        'authorization': string,
        'body' ? : UnitType,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unittype/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * deletes a unit based on the ID supplied
     * @method
     * @name IntegrationAPI#DeleteUnitType
     * @param {string} authorization - Authorization token
     * @param {integer} id - ID of unit type to delete
     *
     */
    DeleteUnitType(parameters: {
        'authorization': string,
        'id': number,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unittype/{id}';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['id'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: id'));
        //}

        path = path.replace(/{id}/, parameters['id'].toString());

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.delete(url, requestOptionArgs)
            .catch(this.handleError);
    };
    /**
     * Returns unit listing
     * @method
     * @name IntegrationAPI#ListUnitTypes
     * @param {string} authorization - Authorization token
     * @param {string} locationId - Location ID
     * @param {boolean} skipCache - ignore cache and use API data
     * @param {boolean} forceCache - use cache and ignore API data
     *
     */
    ListUnitTypes(parameters: {
        'authorization': string,
        'locationId': string,
        'skipCache' ? : boolean,
        'forceCache' ? : boolean,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < unitTypeListWrapper > {
        let domain = this.domain;
        let path = '/unittype';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        //TODO check if param is required in header or body
        //if(parameters['locationId'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: locationId'));
        //}

        queryParameters = this.setNonPatternTypeParameter('locationId', 'locationId', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('skipCache', 'skipCache', queryParameters, parameters);

        queryParameters = this.setNonPatternTypeParameter('forceCache', 'forceCache', queryParameters, parameters);

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.get(url, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * Bulk update of existing unit types
     * @method
     * @name IntegrationAPI#UpdateUnitTypeBulk
     * @param {string} authorization - Authorization token
     * @param {} body - Unit type record
     *
     */
    UpdateUnitTypeBulk(parameters: {
        'authorization': string,
        'body' ? : Array < UnitType > ,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unittype';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.put(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
    /**
     * create new unit type
     * @method
     * @name IntegrationAPI#CreateUnitType
     * @param {} body - Unit type record
     * @param {string} authorization - Authorization token
     *
     */
    CreateUnitType(parameters: {
        'body' ? : UnitType,
        'authorization': string,
        $queryParameters ? : {}
    }, headers: HttpHeaders): Observable < any > {
        let domain = this.domain;
        let path = '/unittype';
        let body: string = "";
        let queryParameters = {};
        let url: string;
        let requestOptionArgs = {};
        let paramsStr: string;

        if (parameters['body'] !== undefined) {
            body = JSON.stringify(parameters['body']);
        }

        //TODO check if param is required in header or body
        //if(parameters['authorization'] === undefined){
        //    return Observable.throw(new Error('Missing required  parameter: authorization'));
        //}

        if (parameters.$queryParameters) {
            queryParameters = this.setQueryParameters(parameters, queryParameters);
        }

        url = this.getUrl(path, queryParameters);

        requestOptionArgs = {
            headers: headers,
            observe: 'response'
        };

        return this.http.post(url, body, requestOptionArgs)
            .map((res: Response) => {
                if (res.headers.get('content-type').match(/csv/)) {
                    return new Blob([res.text()], {
                        type: 'text/csv'
                    });
                } else {
                    return res;
                }
            })
            .catch(this.handleError);
    };
}

export const APP_INT_PROVIDERS = [IntegrationAPI];