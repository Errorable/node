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
