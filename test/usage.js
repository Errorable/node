var assert = require('assert'),
  webErrors = require('../index'),
  validator = require('validator');

/*
var config = require('../lib/config');


var conf = {
  data: {
    entities: '../lib/data/entities',
    properties: '../lib/data/properties',
    types: '../lib/data/types',
    events: '../lib/data/events',
    errors: '../lib/data/errors'
  },
  i18n: {
    "zh-CN": '../lib/data/i18n/zh-CN',
    "en-US": '../lib/data/i18n/en-US'
  }
};

config.set(conf.data, config.i18n);


var entities = require(config.data.entities);
var events = require(config.data.events);
var types = require(config.data.types);
*/

describe('web Error Test', function () {
  it('should have basic info', function () {
    assert.equal(typeof webErrors.locale !== 'undefined', true);
    assert.equal(webErrors.add instanceof Function, true);
    assert.equal(webErrors.setLocale instanceof Function, true);
    assert.equal(webErrors.updateLocaleItem instanceof Function, true);
    assert.equal(webErrors.make instanceof Function, true);
    assert.equal(typeof webErrors.errors === 'object', true);
    assert.equal(typeof webErrors.errors.SUCCESS === 'object', true);
    assert.equal(typeof webErrors.errors.FAILURE === 'object', true);
    assert.equal(typeof webErrors.errors.UNKNOWN_ERROR === 'object', true);
  });

  it('should have basic structure', function () {
    for (var k in webErrors.errors) {
      var v = webErrors.errors[k];
      assert.equal(typeof v.code !== 'undefined', true);
      assert.equal(validator.isNumeric(v.code), true);
      assert.equal(typeof v.message === 'string', true);
    }
  });

  it('should have basic structures', function () {
    for (var k in webErrors.errors) {
      var v = webErrors.errors[k];
      assert.equal(typeof v.code !== 'undefined', true);
      assert.equal(validator.isNumeric(v.code), true);
      assert.equal(typeof v.message !== 'undefined', true);
      assert.equal(typeof v.message === 'string', true);
    }
  });

  it('should have i18n ability', function () {
    var locale = 'zh-CN';
    var lang = webErrors.lang;
    assert(lang('SUCCESS', 'zh-CN') === '成功!', true);


    var localErrors = webErrors.setLocale(locale);
    var enErrors = webErrors.setLocale('en-US');
    for (var key in enErrors) {
      assert(localErrors[key].code === enErrors[key].code, true);
      assert(localErrors[key].message === lang(key, locale), true);
    }
  });

  //Customization
  var customEntities = {
      ENTITY1: 1,
      ENTITY2: 2,
      ENTITY3: 3
    },
    customEvents = {
      EVENT1: 1,
      EVENT2: 2,
      EVENT3: 3
    },
    customErrors = {
      ERROR1: 1,
      ERROR2: 2,
      ERROR3: 3
    };

  var customCode = webErrors.make(customEntities.ENTITY1,
    customEntities.ENTITY2,
    customEvents.EVENT1,
    customErrors.ERROR1);
  var customMessage = "MY ERROR!";
  var customKey = 'MY_ERROR';
  var customLocaleMessage = "我的错误!";
  var customLocale = 'zh-CN';

  it('should be able to be customized', function () {
    assert.equal(webErrors.add('SUCCESS', customCode, customMessage), false);
    assert.equal(webErrors.add(customKey, customCode, customMessage), true);
    assert.equal(webErrors.errors[customKey].code === customCode, true);
    assert.equal(webErrors.errors[customKey].message === customMessage, true);
  });


  //
  it('should be able to be customized by locale', function () {
    webErrors.setLocale('en-US');
    assert.equal(webErrors.updateLocaleItem(), false);
    assert.equal(webErrors.updateLocaleItem(customKey), false);
    assert.equal(webErrors.updateLocaleItem(customKey, customLocaleMessage), false);
    assert.equal(webErrors.updateLocaleItem(customKey, customLocaleMessage, customLocale), true);
    assert.equal(webErrors.errors[customKey].message !== customLocaleMessage, true);
    webErrors.setLocale(customLocale);
    assert.equal(webErrors.updateLocaleItem(customKey, customLocaleMessage, customLocale), true);

    assert.equal(webErrors.errors[customKey].message === customLocaleMessage, true);
  });

  it('should have equivalent translations', function () {
    var enErrors = webErrors.setLocale('en-US');
    for (var locale in webErrors.locales) {
      if (locale === 'en-US') {
        continue;
      }

      for (var k in enErrors) {
        assert.equal(true, !!webErrors.locales[locale][enErrors[k].message]);
      }
    }
  });


  it('should password all errors', function () {
    var errors = webErrors.setLocale('en-US');
    var errorList = [
      //Generic errors

      'SUCCESS',
      'FAILURE',
      'FAILED',
      'ERROR',
      'NOT_FOUND',
      'NOT_LOGIN',
      'EXISTED',
      'NOT_SPECIFIED',
      'REQUIRED',

      //Specific errors
      'UNKNOWN_ERROR',
      'DATABASE_ERROR',
      'PASSWORD_ERROR',


      'USER_NOT_FOUND',
      'USER_NOT_LOGIN',
      'USERNAME_EXISTED',
      'USER_NAME_EXISTED',

      'FILE_NOT_FOUND',


      'ADMIN_EXISTED',
      'ADMIN_NOT_FOUND',
      'ADMIN_NOT_LOGIN',

      'UPDATE_FAILED',
      'INPUT_INVALID',
      'NUMERIC_REQUIRED',
      'NAME_NOT_SPECIFIED',
      'PASSWORD_NOT_SPECIFIED',
      'EMAIL_NOT_SPECIFIED',
      'CATEGORY_NOT_FOUND',
      'EMAIL_EXISTED',
      'PHONE_EXISTED',
      'NETWORK_ERROR',
      'APP_ID_ERROR',
      'APPLICATION_ID_ERROR',
      'SIGNATURE_NOT_MATCH'
    ];
    errorList.forEach(function (v) {
      assert((errors[v].code === errors.SUCCESS.code) || !!errors[v].code);
      assert(typeof errors[v].message === 'string' && (errors[v].message.length > 0));

    });
    errors = webErrors.setLocale('zh-CN');
    errorList.forEach(function (v) {
      assert((errors[v].code === errors.SUCCESS.code) || !!errors[v].code);
      assert(typeof errors[v].message === 'string' && (errors[v].message.length > 0));
    });
  });

});
