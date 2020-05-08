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
import { InlineObject14, InlineObject15 } from '../models';
export interface FavoritesApiRcmsApi1FavoritesDeletePostRequest {
    inlineObject15: InlineObject15;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
export interface FavoritesApiRcmsApi1FavoritesGetRequest {
    outputFormat?: string;
    lang?: string;
    charset?: string;
    cnt?: number;
    pageID?: number;
    moduleId?: Array<number>;
    memberId?: Array<number>;
    rcmsid?: Array<string>;
    groupBy?: string;
    groupAs?: string;
}
export interface FavoritesApiRcmsApi1FavoritesInsertPostRequest {
    inlineObject14: InlineObject14;
    outputFormat?: string;
    lang?: string;
    charset?: string;
}
/**
 * no description
 */
export declare class FavoritesApi extends runtime.BaseAPI {
    static readonly className: string;
    static readonly infos: ({
        class: typeof FavoritesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inlineObject15: any;
            inlineObject14?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof FavoritesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inlineObject15?: undefined;
            inlineObject14?: undefined;
        };
        requestParamInterfaceDescription: string;
    } | {
        class: typeof FavoritesApi;
        url: string;
        requestMethodName: string;
        requestRequiredParamSample: {
            inlineObject14: any;
            inlineObject15?: undefined;
        };
        requestParamInterfaceDescription: string;
    })[];
    /**
     *  ### **Favorite::delete (v1)**
     */
    rcmsApi1FavoritesDeletePost(requestParameters: FavoritesApiRcmsApi1FavoritesDeletePostRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **Favorite::list (v1)**   ## Controller parameters  > **module_type** `topics`
     */
    rcmsApi1FavoritesGet(requestParameters: FavoritesApiRcmsApi1FavoritesGetRequest): Promise<runtime.JSONApiResponse<any>>;
    /**
     *  ### **Favorite::insert (v1)**
     */
    rcmsApi1FavoritesInsertPost(requestParameters: FavoritesApiRcmsApi1FavoritesInsertPostRequest): Promise<runtime.JSONApiResponse<any>>;
}
//# sourceMappingURL=FavoritesApi.d.ts.map