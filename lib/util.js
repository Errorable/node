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
