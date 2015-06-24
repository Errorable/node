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
