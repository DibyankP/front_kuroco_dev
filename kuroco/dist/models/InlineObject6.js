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
import { exists } from '../runtime';
export var InlineObject6Description = "{\n    /**\n     * /label/member_id\n     * @type {number}\n     */\n    memberId: number;\n    /**\n     * Email\n     * @type {string}\n     */\n    email?: string;\n    /**\n     * Password\n     * @type {string}\n     */\n    loginPwd?: string;\n    /**\n     * Nickname\n     * @type {string}\n     */\n    nickname?: string;\n    /**\n     * Family name\n     * @type {string}\n     */\n    name1?: string;\n    /**\n     * Given name\n     * @type {string}\n     */\n    name2?: string;\n    /**\n     * Text\n     * @type {string}\n     */\n    text?: string;\n    /**\n     * Textarea\n     * @type {string}\n     */\n    textarea?: string;\n    /**\n     * Selectbox * 1 => selectBoxOption1 * 2 => selectBoxOption2 * 3 => selectBoxOption3\n     * @type {string}\n     */\n    selectbox?: InlineObject6SelectboxEnum;\n    /**\n     * Radio * 1 => radioOption1 * 2 => radioOption2 * 3 => radioOption3\n     * @type {string}\n     */\n    radio?: InlineObject6RadioEnum;\n    /**\n     * Checkbox * 1 => checkboxOption1 * 2 => checkboxOption2 * 3 => checkboxOption3\n     * @type {Array<string>}\n     */\n    checkbox?: Array<InlineObject6CheckboxEnum>;\n    /**\n     * Date\n     * @type {Date}\n     */\n    date?: Date;\n    /**\n     * Relation\n     * @type {number}\n     */\n    relation?: number;\n    /**\n     * File\n     * @type {object}\n     */\n    file?: object;\n    /**\n     * /label/group_id\n     * @type {Array<number>}\n     */\n    groupId?: InlineObject6GroupIdEnum;\n    /**\n     * /label/open_flg\n     * @type {number}\n     */\n    openFlg?: InlineObject6OpenFlgEnum;\n    /**\n     * /label/login_ok_flg\n     * @type {number}\n     */\n    loginOkFlg?: InlineObject6LoginOkFlgEnum;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validateOnly?: boolean;\n}";
export function InlineObject6FromJSON(json) {
    return InlineObject6FromJSONTyped(json, false);
}
export function InlineObject6FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'memberId': json['member_id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'loginPwd': !exists(json, 'login_pwd') ? undefined : json['login_pwd'],
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'name1': !exists(json, 'name1') ? undefined : json['name1'],
        'name2': !exists(json, 'name2') ? undefined : json['name2'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'textarea': !exists(json, 'textarea') ? undefined : json['textarea'],
        'selectbox': !exists(json, 'selectbox') ? undefined : json['selectbox'],
        'radio': !exists(json, 'radio') ? undefined : json['radio'],
        'checkbox': !exists(json, 'checkbox') ? undefined : json['checkbox'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'groupId': !exists(json, 'group_id') ? undefined : json['group_id'],
        'openFlg': !exists(json, 'open_flg') ? undefined : json['open_flg'],
        'loginOkFlg': !exists(json, 'login_ok_flg') ? undefined : json['login_ok_flg'],
        'validateOnly': !exists(json, 'validate_only') ? undefined : json['validate_only'],
    };
}
export function InlineObject6ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'member_id': value.memberId,
        'email': value.email,
        'login_pwd': value.loginPwd,
        'nickname': value.nickname,
        'name1': value.name1,
        'name2': value.name2,
        'text': value.text,
        'textarea': value.textarea,
        'selectbox': value.selectbox,
        'radio': value.radio,
        'checkbox': value.checkbox,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'relation': value.relation,
        'file': value.file,
        'group_id': value.groupId,
        'open_flg': value.openFlg,
        'login_ok_flg': value.loginOkFlg,
        'validate_only': value.validateOnly,
    };
}
/**
* @export
* @enum {string}
*/
export var InlineObject6SelectboxEnum;
(function (InlineObject6SelectboxEnum) {
    InlineObject6SelectboxEnum["_1"] = "1";
    InlineObject6SelectboxEnum["_2"] = "2";
    InlineObject6SelectboxEnum["_3"] = "3";
})(InlineObject6SelectboxEnum || (InlineObject6SelectboxEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject6RadioEnum;
(function (InlineObject6RadioEnum) {
    InlineObject6RadioEnum["_1"] = "1";
    InlineObject6RadioEnum["_2"] = "2";
    InlineObject6RadioEnum["_3"] = "3";
})(InlineObject6RadioEnum || (InlineObject6RadioEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject6CheckboxEnum;
(function (InlineObject6CheckboxEnum) {
    InlineObject6CheckboxEnum["_1"] = "1";
    InlineObject6CheckboxEnum["_2"] = "2";
    InlineObject6CheckboxEnum["_3"] = "3";
})(InlineObject6CheckboxEnum || (InlineObject6CheckboxEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject6GroupIdEnum;
(function (InlineObject6GroupIdEnum) {
    InlineObject6GroupIdEnum[InlineObject6GroupIdEnum["_1"] = 1] = "_1";
    InlineObject6GroupIdEnum[InlineObject6GroupIdEnum["_2"] = 2] = "_2";
})(InlineObject6GroupIdEnum || (InlineObject6GroupIdEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject6OpenFlgEnum;
(function (InlineObject6OpenFlgEnum) {
    InlineObject6OpenFlgEnum[InlineObject6OpenFlgEnum["_0"] = 0] = "_0";
    InlineObject6OpenFlgEnum[InlineObject6OpenFlgEnum["_1"] = 1] = "_1";
})(InlineObject6OpenFlgEnum || (InlineObject6OpenFlgEnum = {}));
/**
* @export
* @enum {string}
*/
export var InlineObject6LoginOkFlgEnum;
(function (InlineObject6LoginOkFlgEnum) {
    InlineObject6LoginOkFlgEnum[InlineObject6LoginOkFlgEnum["_0"] = 0] = "_0";
    InlineObject6LoginOkFlgEnum[InlineObject6LoginOkFlgEnum["_1"] = 1] = "_1";
})(InlineObject6LoginOkFlgEnum || (InlineObject6LoginOkFlgEnum = {}));