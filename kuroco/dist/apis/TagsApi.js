/* tslint:disable */
/* eslint-disable */
import { __awaiter, __extends, __generator } from "tslib";
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
import { InlineObject19Description, InlineObject19ToJSON, } from '../models';
var usingModelsDescription = {
    InlineObject19: InlineObject19Description.split('\n').map(function (str) { return "  " + str; }).join('\n'),
};
var TagsApiRcmsApi1TagsDeleteTagIdPostRequestDescription = (function (usingModelsDescription) { return "{\n    tagId: number;\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
var TagsApiRcmsApi1TagsGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    order?: Array<string>;\n    pageID?: number;\n    id?: Array<number>;\n    categoryId?: Array<number>;\n    groupBy?: string;\n    groupAs?: string;\n}"; })(usingModelsDescription);
var TagsApiRcmsApi1TagsInsertPostRequestDescription = (function (usingModelsDescription) { return "{\n    inlineObject19: " + usingModelsDescription.InlineObject19 + ";\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n}"; })(usingModelsDescription);
/**
 * no description
 */
var TagsApi = /** @class */ (function (_super) {
    __extends(TagsApi, _super);
    function TagsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TagsApi, "className", {
        get: function () {
            return 'TagsApi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagsApi, "infos", {
        get: function () {
            return [
                {
                    class: TagsApi,
                    url: "/rcms-api/1/tags/delete/{tag_id}".replace("{" + "tag_id" + "}", ''),
                    requestMethodName: 'rcmsApi1TagsDeleteTagIdPost',
                    requestRequiredParamSample: {
                        tagId: {},
                    },
                    requestParamInterfaceDescription: TagsApiRcmsApi1TagsDeleteTagIdPostRequestDescription,
                },
                {
                    class: TagsApi,
                    url: "/rcms-api/1/tags",
                    requestMethodName: 'rcmsApi1TagsGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TagsApiRcmsApi1TagsGetRequestDescription,
                },
                {
                    class: TagsApi,
                    url: "/rcms-api/1/tags/insert",
                    requestMethodName: 'rcmsApi1TagsInsertPost',
                    requestRequiredParamSample: {
                        inlineObject19: {},
                    },
                    requestParamInterfaceDescription: TagsApiRcmsApi1TagsInsertPostRequestDescription,
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  ### **Tag::delete (v1)**
     */
    TagsApi.prototype.rcmsApi1TagsDeleteTagIdPost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TagsDeleteTagIdPostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TagsDeleteTagIdPostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TagsDeleteTagIdPost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TagsDeleteTagIdPost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
                                            throw new runtime.RequiredError('tagId', 'Required parameter requestParameters.tagId was null or undefined when calling rcmsApi1TagsDeleteTagIdPost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tags/delete/{tag_id}".replace("{" + "tag_id" + "}", encodeURIComponent(String(requestParameters.tagId))),
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TagsDeleteTagIdPostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Tag::list (v1)**
     */
    TagsApi.prototype.rcmsApi1TagsGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TagsGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TagsGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TagsGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TagsGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.order) {
                                            queryParameters['order[]'] = requestParameters.order;
                                        }
                                        if (requestParameters.pageID !== undefined) {
                                            queryParameters['pageID'] = requestParameters.pageID;
                                        }
                                        if (requestParameters.id) {
                                            queryParameters['id[]'] = requestParameters.id;
                                        }
                                        if (requestParameters.categoryId) {
                                            queryParameters['category_id[]'] = requestParameters.categoryId;
                                        }
                                        if (requestParameters.groupBy !== undefined) {
                                            queryParameters['groupBy'] = requestParameters.groupBy;
                                        }
                                        if (requestParameters.groupAs !== undefined) {
                                            queryParameters['groupAs'] = requestParameters.groupAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tags",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TagsGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Tag::insert (v1)**
     */
    TagsApi.prototype.rcmsApi1TagsInsertPost = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TagsInsertPostRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TagsInsertPostRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TagsInsertPost.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TagsInsertPost({})'
                                            ].join('\n'));
                                        }
                                        if (requestParameters.inlineObject19 === null || requestParameters.inlineObject19 === undefined) {
                                            throw new runtime.RequiredError('inlineObject19', 'Required parameter requestParameters.inlineObject19 was null or undefined when calling rcmsApi1TagsInsertPost.');
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        headerParameters = {};
                                        headerParameters['Content-Type'] = 'application/json';
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tags/insert",
                                                method: 'POST',
                                                headers: headerParameters,
                                                query: queryParameters,
                                                body: InlineObject19ToJSON(requestParameters.inlineObject19),
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TagsInsertPostRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TagsApi;
}(runtime.BaseAPI));
export { TagsApi };
