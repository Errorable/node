(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
 ERROR CODE FORMAT:

 0x[31-24][23-16][15-8][7-0]

 [0-7]bit : Entity Code,
 [8-15]bit: Property / Entity Code
 [16-23]bit: Event Code
 [24-31]bit: Error Type Code

 */


module.exports = require('./lib/index');

},{"./lib/index":8}],2:[function(require,module,exports){
/**
 *  Error entities that throw or generate the errors
 *
 *  The most commonly used entities are listed
 *
 *  Total 8 bits
 *
 *  Users have the ability to extend the entities for their own projects
 *
 */

  //Put all common entities here

var entities = {
  SYSTEM: 0,
  GENERIC: 0,
  UNKNOWN: 1,
  USER: 2,
  DATABASE: 3,
  IMAGE: 4,
  EMAIL: 5,
  FILE: 6,
  ADMIN: 7,
  ADMINISTRATOR: 7,

  PASSWORD: 8,
  INPUT: 9,
  NUMERIC: 10,
  CATEGORY: 11,
  NAME: 12,
  PHONE: 13,
  MERCHANT: 14,
  NETWORK: 15
};
module.exports = entities;

},{}],3:[function(require,module,exports){
var util = require("./util");
var entities = require('./entities');
var types = require('./types');
var events = require('./events');
var errors = {};


//Basic/generic errors

util.define(errors, 'SUCCESS', util.make(entities.GENERIC, 0, events.NONE, types.SUCCESS));
util.define(errors, 'FAILURE', util.make(entities.GENERIC, 0, events.NONE, types.FAILURE));
util.define(errors, 'FAILED', util.make(entities.GENERIC, 0, events.NONE, types.FAILED));
util.define(errors, 'ERROR', util.make(entities.GENERIC, 0, events.NONE, types.ERROR));
util.define(errors, 'NOT_FOUND', util.make(entities.GENERIC, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'EXISTED', util.make(entities.GENERIC, 0, events.NONE, types.EXISTED));
util.define(errors, 'NOT_SPECIFIED', util.make(entities.GENERIC, 0, events.NONE, types.NOT_SPECIFIED));
util.define(errors, 'NOT_LOGIN', util.make(entities.GENERIC, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'REQUIRED', util.make(entities.GENERIC, 0, events.NONE, types.REQUIRED));

util.define(errors, 'UNKNOWN_ERROR', util.make(entities.UNKNOWN, 0, events.NONE, types.ERROR));

//User related errors
util.define(errors, 'USER_EXISTED', util.make(entities.USER, 0, events.NONE, types.EXISTED));
util.define(errors, 'USER_NOT_FOUND', util.make(entities.USER, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'USER_NOT_LOGIN', util.make(entities.USER, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'USER_NOT_LOGIN', util.make(entities.USER, 0, events.NONE, types.NOT_LOGIN));

//User name related errors
util.define(errors, 'USERNAME_EXISTED', util.make(entities.USER, entities.NAME, events.NONE, types.EXISTED));

//Database errros
util.define(errors, 'DATABASE_ERROR', util.make(entities.DATABASE, 0, events.NONE, types.ERROR));


//Password related errors
util.define(errors, 'PASSWORD_ERROR', util.make(entities.PASSWORD, 0, events.NONE, types.ERROR));
util.define(errors, 'PASSWORD_NOT_SPECIFIED', util.make(entities.PASSWORD, 0, events.NONE, types.NOT_SPECIFIED));




//File related errors
util.define(errors, 'FILE_NOT_FOUND', util.make(entities.FILE, 0, events.NONE, types.NOT_FOUND));


//Administrator related errors

util.define(errors, 'ADMIN_EXISTED', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.EXISTED));
util.define(errors, 'ADMINISTRATOR_EXISTED', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.EXISTED));

util.define(errors, 'ADMIN_NOT_FOUND', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'ADMINISTRATOR_NOT_FOUND', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_FOUND));


util.define(errors, 'ADMIN_NOT_LOGIN', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'ADMINISTRATOR_NOT_LOGIN', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_LOGIN));


//Merchant errors
util.define(errors, 'MERCHANT_NOT_LOGIN', util.make(entities.MERCHANT, 0, events.NONE, types.NOT_LOGIN));


//Action errors
util.define(errors, 'UPDATE_FAILED', util.make(entities.GENERIC, 0, events.UPDATE, types.FAILED));

util.define(errors, 'INPUT_INVALID', util.make(entities.GENERIC, 0, events.INPUT, types.INVALID));

util.define(errors, 'NUMERIC_REQUIRED', util.make(entities.NUMERIC, 0, events.NONE, types.REQUIRED));

util.define(errors, 'NAME_NOT_SPECIFIED', util.make(entities.NAME, 0, events.NONE, types.NOT_SPECIFIED));


//Email related errors
util.define(errors, 'EMAIL_NOT_SPECIFIED', util.make(entities.EMAIL, 0, events.NONE, types.NOT_SPECIFIED));
util.define(errors, 'EMAIL_EXISTED', util.make(entities.EMAIL, 0, events.NONE, types.EXISTED));

//Category related errors
util.define(errors, 'CATEGORY_NOT_FOUND', util.make(entities.CATEGORY, 0, events.NONE, types.NOT_FOUND));


//Phone related errors
util.define(errors, 'PHONE_EXISTED', util.make(entities.PHONE, 0, events.NONE, types.EXISTED));


//Network errors
util.define(errors, 'NETWORK_ERROR', util.make(entities.NETWORK, 0, events.NONE, types.ERROR));


module.exports = errors;

},{"./entities":2,"./events":4,"./types":9,"./util":10}],4:[function(require,module,exports){
/**
 *  Error events that throw or generate the errors
 *
 *  The most commonly used events are listed
 *
 *  Total 8 bits
 *
 *  Users have the ability to extend the events for their own projects
 *
 */

var events = {
  NONE: 0,
  REGISTER: 1,
  LOGIN: 2,
  LOGOUT: 3,

  CREATE: 4,

  //Alias have the same value
  RETRIEVE: 5,
  READ: 5,
  GET: 5,

  UPDATE: 6,
  //Alias
  REMOVE: 7,
  DELETE: 7
};

module.exports = events;

},{}],5:[function(require,module,exports){
var messages = {};

var util = require('../util');

util.defineString(messages, 'SUCCESS', "Success!");
util.defineString(messages, 'FAILURE', "Failure!");
util.defineString(messages, 'FAILED', "Failed!");
util.defineString(messages, 'ERROR', "Error!");
util.defineString(messages, 'NOT_FOUND', "Not Found!");
util.defineString(messages, 'EXISTED', "Existed!");
util.defineString(messages, 'NOT_SPECIFIED', "Not Specified!");
util.defineString(messages, 'NOT_LOGIN', "Not Login!");
util.defineString(messages, 'REQUIRED', "Required!");
util.defineString(messages, 'UNKNOWN_ERROR', "Unknown Error!");

util.defineString(messages, 'USER_EXISTED', "User Existed!");
util.defineString(messages, 'USER_NOT_FOUND', "User Not Found!");
util.defineString(messages, 'USER_NOT_LOGIN', "User Not Login!");

util.defineString(messages, 'USERNAME_EXISTED', "Username Existed!");
util.defineString(messages, 'DATABASE_ERROR', "Database Error!");

//Password errors
util.defineString(messages, 'PASSWORD_ERROR', "Password Error!");
util.defineString(messages, 'PASSWORD_NOT_SPECIFIED', "Password Not Specified!");


util.defineString(messages, 'FILE_NOT_FOUND', "File Not Found!");

util.defineString(messages, 'ADMIN_EXISTED', "Administrator Existed!");
util.defineString(messages, 'ADMINISTRATOR_EXISTED', "Administrator Existed!");

util.defineString(messages, 'ADMIN_NOT_FOUND', "Administrator Not Found!");
util.defineString(messages, 'ADMINISTRATOR_NOT_FOUND', "Administrator Not Found!");

util.defineString(messages, 'ADMIN_NOT_LOGIN', "Administrator Not Login!");
util.defineString(messages, 'ADMINISTRATOR_NOT_LOGIN', "Administrator Not Login!");


util.defineString(messages, 'MERCHANT_NOT_LOGIN', "Merchant Not Login!");

util.defineString(messages, 'UPDATE_FAILED', "Update Failed!");

util.defineString(messages, 'INPUT_INVALID', "Input Invalid!");

util.defineString(messages, 'NUMERIC_REQUIRED', "Numeric Required!");

util.defineString(messages, 'NAME_NOT_SPECIFIED', "Name Not Specified!");

util.defineString(messages, 'EMAIL_NOT_SPECIFIED', "Email Not Specified!");
util.defineString(messages, 'EMAIL_EXISTED', "Email Existed!");


util.defineString(messages, 'CATEGORY_NOT_FOUND', "Category Not Found!");
util.defineString(messages, 'PHONE_EXISTED', "Phone Existed!");
util.defineString(messages, 'NETWORK_ERROR', "Network Error!");





module.exports = messages;

},{"../util":10}],6:[function(require,module,exports){
module.exports = {
  'en-US': require('./en-US'),
  'zh-CN': require('./zh-CN')
};

},{"./en-US":5,"./zh-CN":7}],7:[function(require,module,exports){
var messages = {};

var util = require('../util');


util.defineString(messages, 'SUCCESS', "成功!");
util.defineString(messages, 'FAILURE', "失败!");
util.defineString(messages, 'FAILED', "失败了!");
util.defineString(messages, 'ERROR', "错误!");
util.defineString(messages, 'NOT_FOUND', "没有找到!");
util.defineString(messages, 'EXISTED', "已经存在!");
util.defineString(messages, 'NOT_SPECIFIED', "未指定!");
util.defineString(messages, 'NOT_LOGIN', "尚未登录!");
util.defineString(messages, 'REQUIRED', "必需有!");
util.defineString(messages, 'UNKNOWN_ERROR', "未知错误!");

util.defineString(messages, 'USER_EXISTED', "用户已经存在!");
util.defineString(messages, 'USER_NOT_FOUND', "用户未找到!");
util.defineString(messages, 'USER_NOT_LOGIN', "用户尚未登录!");
util.defineString(messages, 'USERNAME_EXISTED', "用户名已经存在!");
util.defineString(messages, 'DATABASE_ERROR', "数据库错误!");

//密码相关错误
util.defineString(messages, 'PASSWORD_ERROR', "密码错误!");
util.defineString(messages, 'PASSWORD_NOT_SPECIFIED', "密码未指定!");


util.defineString(messages, 'FILE_NOT_FOUND', "文件未找到!");

util.defineString(messages, 'ADMIN_EXISTED', "管理员已经存在!");
util.defineString(messages, 'ADMINISTRATOR_EXISTED', "管理员已经存在!");

util.defineString(messages, 'ADMIN_NOT_FOUND', "管理员未找到!");
util.defineString(messages, 'ADMINISTRATOR_NOT_FOUND', "管理员未找到!");

util.defineString(messages, 'ADMIN_NOT_LOGIN', "管理员未登录!");
util.defineString(messages, 'ADMINISTRATOR_NOT_LOGIN', "管理员未登录!");


util.defineString(messages, 'MERCHANT_NOT_LOGIN', "商户未登录!");

util.defineString(messages, 'UPDATE_FAILED', "更新失败!");

util.defineString(messages, 'INPUT_INVALID', "输入无效!");

util.defineString(messages, 'NUMERIC_REQUIRED', "必须是数值!");

util.defineString(messages, 'NAME_NOT_SPECIFIED', "名字未指定!");

util.defineString(messages, 'EMAIL_NOT_SPECIFIED', "邮箱未指定!");
util.defineString(messages, 'EMAIL_EXISTED', "邮箱已经存在!");

util.defineString(messages, 'CATEGORY_NOT_FOUND', "分类未找到!");
util.defineString(messages, 'PHONE_EXISTED', "手机已存在!");
util.defineString(messages, 'NETWORK_ERROR', "网络错误!");

module.exports = messages;

},{"../util":10}],8:[function(require,module,exports){
var util = require('./util');
var errors = require('./errors');

var webErrors = {
  version: '0.0.3',
  locale: 'en-US',
  setLocale: function (locale) {
    this.locale = locale;
    var newErrors = {};
    for (var key in errors) {
      newErrors[key] = {code: errors[key].code};
      newErrors[key].message = util.lang(key, locale);
    }
    return newErrors;
  },
  make: util.customMake,
  add: function (name, code, message) {
    if (util.add(name, code, message)) {
      webErrors.errors[name] = {
        code: code,
        message: message
      };
      return true;
    }
    return false;
  },
  updateLocaleItem: function (name, value, locale) {
    if (util.updateLocaleItem(name, value, locale)) {
      if (webErrors.locale === locale) {
        webErrors.errors = webErrors.setLocale(locale);
      }
      return true;
    }
    return false;
  }
};

webErrors.lang = util.lang;

webErrors.errors = webErrors.setLocale(webErrors.locale);
module.exports = webErrors;

},{"./errors":3,"./util":10}],9:[function(require,module,exports){
/**
 *  Error types that thrown or generated
 *
 *  The most commonly used types are listed
 *
 *  Total 8 bits
 *
 *  Users have the ability to extend the types for their own projects
 *
 */



var types = {

  //Basic error types
  SUCCEEDED: 0,
  SUCCESS: 0,

  //Alias can be of the same value
  FAILURE: 1,
  FAILED: 1,
  ERROR: 1,

  //Validation error types
  INVALID: 2,
  MISMATCH: 3,
  REQUIRED: 4,

  //Existence related
  NOT_FOUND: 5,
  EXISTED: 6,

  //Accessibility or authentication related
  NOT_LOGIN: 7,
  EXPIRED: 8,
  BLOCKED: 9,

  //Resources related
  EXCEEDED: 10,

  //Input related
  NOT_SPECIFIED: 11

};
module.exports = types;

},{}],10:[function(require,module,exports){
var defaultLang = 'en-US';
var util = {
  define: function(errors, key, value) {
    if (errors[key]) {
      return false;
    } else {
      errors[key] = {
        code: value
      }
    }
  },
  defineString: function(locale, key, value) {
    if (locale[key]) {
      return false;
    } else {
      locale[key] = value;
    }
  },
  /**
   * Easy way to make an error code
   * @param entity
   * @param property
   * @param event
   * @param type
   * @returns {number}
   */
  make: function (entity, property, event, type) {
    entity = entity || 0;
    property = property || 0;
    event = event || 0;
    type = type || 0;
    return (entity << 24) | (property << 16) | (event << 8) | type;
  },

  /**
   * Easy way to make a custom error code
   * @param entity
   * @param property
   * @param event
   * @param type
   * @returns {number}
   */

  customMake: function (entity, property, event, type) {
    return util.make(entity | 0x80, property | 0x80, event | 0x80, type | 0x80);
  },

  /**
   * Add an error with a name, a code, a message
   *
   * @param name
   * @param code
   * @param message
   * @returns {boolean}
   */
  add: function (name, code, message) {
    var errors = require('./errors');
    if (name in errors) {
      return false;
    }
    errors[name] = {
      code: code,
      message: message
    };
    return true;
  },

  /**
   * Update a locale item
   * @param name
   * @param value
   * @param locale
   * @returns {boolean}
   */
  updateLocaleItem: function (name, value, locale) {
    var i18n = require('./i18n');
    if (!locale || !name || !value) {
      return false;
    }
    if (!(locale in i18n)) {
      i18n[locale] = {};
    }
    i18n[locale][name] = value;
    return true;
  },

  /**
   * Get localized message
   * @param key
   * @param locale
   * @returns {*}
   */
  lang: function (key, locale) {
    var i18n = require('./i18n');
    locale = locale || defaultLang;
    if (locale in i18n) {
      if (i18n[locale][key]) {
        return i18n[locale][key];
      }
    }
    if (i18n[defaultLang] && i18n[defaultLang][key]) {
      return i18n[locale][key];
    }
    return key ? key : '';
  }
};
module.exports = util;

},{"./errors":3,"./i18n":6}]},{},[1]);
