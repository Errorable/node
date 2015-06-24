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
