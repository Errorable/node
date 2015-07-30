var util = require("./util");
var data = {};

var entities = require('./data/entities');
var properties = require('./data/properties');
var events = require('./data/events');
var types = require('./data/types');
var errors = require('./data/errors');

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
