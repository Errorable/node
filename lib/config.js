
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
