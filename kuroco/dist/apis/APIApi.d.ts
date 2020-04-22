/**
 * Test
 * test
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
export interface APIApiRcmsApi1ApisGetRequest {
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface APIApiRcmsApi1OpenapiGetRequest {
    apiId: number;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface APIApiRcmsApi1RequestGetRequest {
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
/**
 * no description
 */
export declare class APIApi extends runtime.BaseAPI {
    static readonly className: string;
    static readonly infos: ({
        class: typeof APIApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            apiId?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof APIApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            apiId: any;
        };
        requestParamInterfaceDescription: string;
    })[];
    /**
     *  ### **Api::list (v1)**
     */
    rcmsApi1ApisGet(requestParameters: APIApiRcmsApi1ApisGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **Api::openapi_data (v1)**
     */
    rcmsApi1OpenapiGet(requestParameters: APIApiRcmsApi1OpenapiGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **Api::request_api (v1)**
     */
    rcmsApi1RequestGet(requestParameters: APIApiRcmsApi1RequestGetRequest): Promise<runtime.JSONApiResponse<any>>;
}
//# sourceMappingURL=APIApi.d.ts.map