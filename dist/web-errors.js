(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

/*
 ERROR CODE FORMAT:

 0x[31-24][23-16][15-8][7-0]

 [0-7]bit : Entity Code,
 [8-15]bit: Property / Entity Code
 [16-23]bit: Event Code
 [24-31]bit: Error Type Code

 */


var webErrors = require('./lib/index');

global.webErrors = webErrors;

module.exports = webErrors;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/index":11}],2:[function(require,module,exports){

module.exports = {
  locale: "zh-CN",
  data: {
    entities: './data/entities',
    properties: './data/properties',
    types: './data/types',
    events: './data/events',
    errors: './data/errors'
  },
  i18n: {
    "zh-CN": './data/i18n/zh-CN',
    "en-US": './data/i18n/en-US'
  },
  set: function(data, i18n) {
    this.data = data || this.data;
    this.i18n = i18n || this.i18n;
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "NONE": 0,
  "SYSTEM": 0,
  "GENERIC": 0,
  "UNKNOWN": 1,
  "USER": 2,
  "DATABASE": 3,
  "IMAGE": 4,
  "EMAIL": 5,
  "FILE": 6,
  "ADMIN": 7,
  "ADMINISTRATOR": 7,
  "PASSWORD": 8,
  "INPUT": 9,
  "NUMERIC": 10,
  "CATEGORY": 11,
  "NAME": 12,
  "PHONE": 13,
  "MERCHANT": 14,
  "NETWORK": 15,
  "APPLICATION": 16,
  "SIGNATURE": 17
}

},{}],4:[function(require,module,exports){
module.exports={
  "NONE": 0,
  "REGISTER": 1,
  "LOGIN": 2,
  "LOGOUT": 3,
  "CREATE": 4,
  "RETRIEVE": 5,
  "READ": 5,
  "GET": 5,
  "UPDATE": 6,
  "REMOVE": 7,
  "DELETE": 7
}

},{}],5:[function(require,module,exports){
module.exports={
  "SUCCESS": "Success!",
  "FAILURE": "Failure!",
  "FAILED": "Failed!",
  "ERROR": "Error!",
  "NOT_FOUND": "Not Found!",
  "EXISTED": "Existed!",
  "NOT_SPECIFIED": "Not Specified!",
  "NOT_LOGIN": "Not Login!",
  "REQUIRED": "Required!",
  "UNKNOWN_ERROR": "Unknown Error!",
  "USER_EXISTED": "User Existed!",
  "USER_NOT_FOUND": "User Not Found!",
  "USER_NOT_LOGIN": "User Not Login!",
  "USERNAME_EXISTED": "Username Existed!",
  "USER_NAME_EXISTED": "Username Existed!",
  "DATABASE_ERROR": "Database Error!",
  "PASSWORD_ERROR": "Password Error!",
  "PASSWORD_NOT_SPECIFIED": "Password Not Specified!",
  "FILE_NOT_FOUND": "File Not Found!",
  "ADMIN_EXISTED": "Administrator Existed!",
  "ADMINISTRATOR_EXISTED": "Administrator Existed!",
  "ADMIN_NOT_FOUND": "Administrator Not Found!",
  "ADMINISTRATOR_NOT_FOUND": "Administrator Not Found!",
  "ADMIN_NOT_LOGIN": "Administrator Not Login!",
  "ADMINISTRATOR_NOT_LOGIN": "Administrator Not Login!",
  "MERCHANT_NOT_LOGIN": "Merchant Not Login!",
  "UPDATE_FAILED": "Update Failed!",
  "INPUT_INVALID": "Input Invalid!",
  "NUMERIC_REQUIRED": "Numeric Required!",
  "NAME_NOT_SPECIFIED": "Name Not Specified!",
  "EMAIL_NOT_SPECIFIED": "Email Not Specified!",
  "EMAIL_EXISTED": "Email Existed!",
  "CATEGORY_NOT_FOUND": "Category Not Found!",
  "PHONE_EXISTED": "Phone Existed!",
  "NETWORK_ERROR": "Network Error!",
  "APP_ID_ERROR": "Application ID Error!",
  "APPLICATION_ID_ERROR": "Application ID Error!",
  "MERCHANT_ID_ERROR": "Merchant ID Error!",
  "SIGNATURE_NOT_MATCH": "Signature Not Match!"
}

},{}],6:[function(require,module,exports){
module.exports={
  "SUCCESS": "成功!",
  "FAILURE": "失败!",
  "FAILED": "失败了!",
  "ERROR": "错误!",
  "NOT_FOUND": "没有找到!",
  "EXISTED": "已经存在!",
  "NOT_SPECIFIED": "未指定!",
  "NOT_LOGIN": "尚未登录!",
  "REQUIRED": "必需有!",
  "UNKNOWN_ERROR": "未知错误!",
  "USER_EXISTED": "用户已经存在!",
  "USER_NOT_FOUND": "用户未找到!",
  "USER_NOT_LOGIN": "用户尚未登录!",
  "USERNAME_EXISTED": "用户名已经存在!",
  "USER_NAME_EXISTED": "用户名已经存在!",
  "DATABASE_ERROR": "数据库错误!",
  "PASSWORD_ERROR": "密码错误!",
  "PASSWORD_NOT_SPECIFIED": "密码未指定!",
  "FILE_NOT_FOUND": "文件未找到!",
  "ADMIN_EXISTED": "管理员已经存在!",
  "ADMINISTRATOR_EXISTED": "管理员已经存在!",
  "ADMIN_NOT_FOUND": "管理员未找到!",
  "ADMINISTRATOR_NOT_FOUND": "管理员未找到!",
  "ADMIN_NOT_LOGIN": "管理员未登录!",
  "ADMINISTRATOR_NOT_LOGIN": "管理员未登录!",
  "MERCHANT_NOT_LOGIN": "商户未登录!",
  "UPDATE_FAILED": "更新失败!",
  "INPUT_INVALID": "输入无效!",
  "NUMERIC_REQUIRED": "必须是数值!",
  "NAME_NOT_SPECIFIED": "名字未指定!",
  "EMAIL_NOT_SPECIFIED": "邮箱未指定!",
  "EMAIL_EXISTED": "邮箱已经存在!",
  "CATEGORY_NOT_FOUND": "分类未找到!",
  "PHONE_EXISTED": "手机已存在!",
  "NETWORK_ERROR": "网络错误!",
  "APP_ID_ERROR": "应用ID错误!",
  "APPLICATION_ID_ERROR": "应用ID错误!",
  "MERCHANT_ID_ERROR": "商家ID错误!",
  "SIGNATURE_NOT_MATCH": "签名不一致!"
}

},{}],7:[function(require,module,exports){
module.exports={
  "NONE": 0
}

},{}],8:[function(require,module,exports){
module.exports={
  "SUCCEEDED": 0,
  "SUCCESS": 0,
  "FAILURE": 1,
  "FAILED": 1,
  "ERROR": 1,
  "INVALID": 2,
  "MISMATCH": 3,
  "REQUIRED": 4,
  "NOT_FOUND": 5,
  "EXISTED": 6,
  "NOT_LOGIN": 7,
  "EXPIRED": 8,
  "BLOCKED": 9,
  "EXCEEDED": 10,
  "NOT_SPECIFIED": 11
}

},{}],9:[function(require,module,exports){
var util = require("./util");
var data = {};

var entities = require('./data/entities');
var properties = require('./data/properties');
var events = require('./data/events');
var types = require('./data/types');

var config = require('./config');
if (config.data) {
  entities = require(config.data.entities);
  properties = require(config.data.properties);
  events = require(config.data.events);
  types = require(config.data.types);
  errors = require(config.data.errors);
}

for (errorName in errors) {
  var item = errors[errorName];
  util.define(data, errorName,
    util.make(
      entities[item[0]],
      properties[item[1]],
      events[item[2]],
      types[item[3]]
    )
  );
}


module.exports = data;

},{"./config":2,"./data/entities":3,"./data/events":4,"./data/properties":7,"./data/types":8,"./util":12}],10:[function(require,module,exports){
var config = require('./config');


//Intent to Include Languages files for browser

var cn = require('./data/i18n/zh-CN');
var en  = require('./data/i18n/en-US');

var  data = {
  'en-US': en,
  'zh-CN': cn
};

for(var k in config.i18n) {
  data[k] = require(config.i18n[k]);
}


module.exports = data;

},{"./config":2,"./data/i18n/en-US":5,"./data/i18n/zh-CN":6}],11:[function(require,module,exports){
var util = require('./util');
var errors = require('./errors');
var config = require('./config');


var webErrors = {
  version: '0.0.3',
  locale: 'en-US',
  setConfig: function(data, i18n) {
    config.set(data, i18n);
  },
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

},{"./config":2,"./errors":9,"./util":12}],12:[function(require,module,exports){
var defaultLang = 'en-US';
var util = {
  define: function(errors, key, value) {
      errors[key] = {
        code: value
      };
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

},{"./errors":9,"./i18n":10}]},{},[1]);
