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
