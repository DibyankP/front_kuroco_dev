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
/**
 *
 * @export
 * @interface InlineObject12
 */
export interface InlineObject12 {
    /**
     * コメントID
     * @type {number}
     * @memberof InlineObject12
     */
    commentId: number;
    /**
     * モジュールID
     * @type {number}
     * @memberof InlineObject12
     */
    moduleId: number;
    /**
     * Name
     * @type {string}
     * @memberof InlineObject12
     */
    name: string;
    /**
     * Mail
     * @type {string}
     * @memberof InlineObject12
     */
    mail?: string;
    /**
     * URL
     * @type {string}
     * @memberof InlineObject12
     */
    url?: string;
    /**
     * Comments
     * @type {string}
     * @memberof InlineObject12
     */
    note: string;
    /**
     * Rating
     * @type {number}
     * @memberof InlineObject12
     */
    rating?: number;
    /**
     * 削除キー
     * @type {string}
     * @memberof InlineObject12
     */
    delkey?: string;
}
export declare const InlineObject12Description = "{\n    /**\n     * \u30B3\u30E1\u30F3\u30C8ID\n     * @type {number}\n     */\n    commentId: number;\n    /**\n     * \u30E2\u30B8\u30E5\u30FC\u30EBID\n     * @type {number}\n     */\n    moduleId: number;\n    /**\n     * Name\n     * @type {string}\n     */\n    name: string;\n    /**\n     * Mail\n     * @type {string}\n     */\n    mail?: string;\n    /**\n     * URL\n     * @type {string}\n     */\n    url?: string;\n    /**\n     * Comments\n     * @type {string}\n     */\n    note: string;\n    /**\n     * Rating\n     * @type {number}\n     */\n    rating?: number;\n    /**\n     * \u524A\u9664\u30AD\u30FC\n     * @type {string}\n     */\n    delkey?: string;\n}";
export declare function InlineObject12FromJSON(json: any): InlineObject12;
export declare function InlineObject12FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject12;
export declare function InlineObject12ToJSON(value?: InlineObject12 | null): any;
//# sourceMappingURL=InlineObject12.d.ts.map