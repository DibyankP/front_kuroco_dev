/* tslint:disable */
/* eslint-disable */
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
export var InlineObject16Description = "{\n    /**\n     * Upload file\n     * @type {Blob}\n     */\n    file: Blob;\n}";
export function InlineObject16FromJSON(json) {
    return InlineObject16FromJSONTyped(json, false);
}
export function InlineObject16FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'file': json['file'],
    };
}
export function InlineObject16ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'file': value.file,
    };
}