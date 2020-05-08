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
import { RcmsApi1Topics1InsertExtCol05, RcmsApi1Topics1InsertExtCol15, RcmsApi1Topics1InsertExtJsn12 } from './';
/**
 *
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * Topic title
     * @type {string}
     * @memberof InlineObject3
     */
    subject: string;
    /**
     * Category ID * 1 => CategoryForSingle1 * 4 => CategoryForSingle2
     * @type {number}
     * @memberof InlineObject3
     */
    contentsType?: InlineObject3ContentsTypeEnum;
    /**
     * Date
     * @type {Date}
     * @memberof InlineObject3
     */
    ymd?: Date;
    /**
     * Published / Not published
     * @type {string}
     * @memberof InlineObject3
     */
    openType?: InlineObject3OpenTypeEnum;
    /**
     * Display all topics to logged in members, regardless ther public/hidden status
     * @type {number}
     * @memberof InlineObject3
     */
    topicsFlg?: InlineObject3TopicsFlgEnum;
    /**
     * Season
     * @type {number}
     * @memberof InlineObject3
     */
    season?: number;
    /**
     * Contents
     * @type {string}
     * @memberof InlineObject3
     */
    contents?: string;
    /**
     * display up
     * @type {number}
     * @memberof InlineObject3
     */
    regularFlg?: number;
    /**
     * Display method
     * @type {number}
     * @memberof InlineObject3
     */
    linkFlg?: number;
    /**
     * Link
     * @type {string}
     * @memberof InlineObject3
     */
    linkUrl?: string;
    /**
     * Text
     * @type {string}
     * @memberof InlineObject3
     */
    extCol01?: string;
    /**
     * TextArea
     * @type {string}
     * @memberof InlineObject3
     */
    extCol02?: string;
    /**
     * Select * 1 => Option1 * 2 => Option2 * 3 => Option3
     * @type {object | string}
     * @memberof InlineObject3
     */
    extCol03?: object | string;
    /**
     * Checkbox * 1 => Option1 * 2 => Option2 * 3 => Option3
     * @type {Array<object | string>}
     * @memberof InlineObject3
     */
    extCol04?: Array<object | string>;
    /**
     * Date
     * @type {Date | object}
     * @memberof InlineObject3
     */
    extCol07?: Date | object;
    /**
     * DateTime
     * @type {string | object}
     * @memberof InlineObject3
     */
    extCol08?: string | object;
    /**
     *
     * @type {RcmsApi1Topics1InsertExtCol05}
     * @memberof InlineObject3
     */
    extCol05?: RcmsApi1Topics1InsertExtCol05;
    /**
     *
     * @type {RcmsApi1Topics1InsertExtCol15}
     * @memberof InlineObject3
     */
    extCol15?: RcmsApi1Topics1InsertExtCol15;
    /**
     * Table * 1 => Parent1 * 2 => Parent2 * 3 => Parent3 * 4 => Parent4 * 5 => Parent5
     * @type {object | string}
     * @memberof InlineObject3
     */
    extCol06?: object | string;
    /**
     * Relation
     * @type {number}
     * @memberof InlineObject3
     */
    extCol09?: number;
    /**
     * Private File
     * @type {object}
     * @memberof InlineObject3
     */
    extCol11?: object;
    /**
     *
     * @type {RcmsApi1Topics1InsertExtJsn12}
     * @memberof InlineObject3
     */
    extJsn12?: RcmsApi1Topics1InsertExtJsn12;
    /**
     * HTML
     * @type {string}
     * @memberof InlineObject3
     */
    extCol13?: string;
    /**
     * Wysiwyg
     * @type {string}
     * @memberof InlineObject3
     */
    extCol14?: string;
    /**
     * /label/send_validate
     * @type {boolean}
     * @memberof InlineObject3
     */
    validateOnly?: boolean;
}
export declare const InlineObject3Description = "{\n    /**\n     * Topic title\n     * @type {string}\n     */\n    subject: string;\n    /**\n     * Category ID * 1 => CategoryForSingle1 * 4 => CategoryForSingle2\n     * @type {number}\n     */\n    contentsType?: InlineObject3ContentsTypeEnum;\n    /**\n     * Date\n     * @type {Date}\n     */\n    ymd?: Date;\n    /**\n     * Published / Not published\n     * @type {string}\n     */\n    openType?: InlineObject3OpenTypeEnum;\n    /**\n     * Display all topics to logged in members, regardless ther public/hidden status\n     * @type {number}\n     */\n    topicsFlg?: InlineObject3TopicsFlgEnum;\n    /**\n     * Season\n     * @type {number}\n     */\n    season?: number;\n    /**\n     * Contents\n     * @type {string}\n     */\n    contents?: string;\n    /**\n     * display up\n     * @type {number}\n     */\n    regularFlg?: number;\n    /**\n     * Display method\n     * @type {number}\n     */\n    linkFlg?: number;\n    /**\n     * Link\n     * @type {string}\n     */\n    linkUrl?: string;\n    /**\n     * Text\n     * @type {string}\n     */\n    extCol01?: string;\n    /**\n     * TextArea\n     * @type {string}\n     */\n    extCol02?: string;\n    /**\n     * Select * 1 => Option1 * 2 => Option2 * 3 => Option3\n     * @type {object | string}\n     */\n    extCol03?: object | string;\n    /**\n     * Checkbox * 1 => Option1 * 2 => Option2 * 3 => Option3\n     * @type {Array<object | string>}\n     */\n    extCol04?: Array<object | string>;\n    /**\n     * Date\n     * @type {Date | object}\n     */\n    extCol07?: Date | object;\n    /**\n     * DateTime\n     * @type {string | object}\n     */\n    extCol08?: string | object;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtCol05}\n     */\n    extCol05?: RcmsApi1Topics1InsertExtCol05;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtCol15}\n     */\n    extCol15?: RcmsApi1Topics1InsertExtCol15;\n    /**\n     * Table * 1 => Parent1 * 2 => Parent2 * 3 => Parent3 * 4 => Parent4 * 5 => Parent5\n     * @type {object | string}\n     */\n    extCol06?: object | string;\n    /**\n     * Relation\n     * @type {number}\n     */\n    extCol09?: number;\n    /**\n     * Private File\n     * @type {object}\n     */\n    extCol11?: object;\n    /**\n     * \n     * @type {RcmsApi1Topics1InsertExtJsn12}\n     */\n    extJsn12?: RcmsApi1Topics1InsertExtJsn12;\n    /**\n     * HTML\n     * @type {string}\n     */\n    extCol13?: string;\n    /**\n     * Wysiwyg\n     * @type {string}\n     */\n    extCol14?: string;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validateOnly?: boolean;\n}";
export declare function InlineObject3FromJSON(json: any): InlineObject3;
export declare function InlineObject3FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject3;
export declare function InlineObject3ToJSON(value?: InlineObject3 | null): any;
/**
* @export
* @enum {string}
*/
export declare enum InlineObject3ContentsTypeEnum {
    _1 = 1,
    _4 = 4
}
/**
* @export
* @enum {string}
*/
export declare enum InlineObject3OpenTypeEnum {
    _open = "open",
    _close = "close",
    _default = "default"
}
/**
* @export
* @enum {string}
*/
export declare enum InlineObject3TopicsFlgEnum {
    _0 = 0,
    _1 = 1
}
//# sourceMappingURL=InlineObject3.d.ts.map