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
