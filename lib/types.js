/**
 *  Error types that thrown or generated
 *
 *  The most commonly used types are listed
 *
 *  Total 8 bits
 *
 *  Users have the ability to extend the types for their own projects
 *
 */



var types = {

  //Basic error types
  SUCCEEDED: 0,
  SUCCESS: 0,

  //Alias can be of the same value
  FAILURE: 1,
  FAILED: 1,
  ERROR: 1,

  //Validation error types
  INVALID: 2,
  MISMATCH: 3,
  REQUIRED: 4,

  //Existence related
  NOT_FOUND: 5,
  EXISTED: 6,

  //Accessibility or authentication related
  NOT_LOGIN: 7,
  EXPIRED: 8,
  BLOCKED: 9,

  //Resources related
  EXCEEDED: 10,

  //Input related
  NOT_SPECIFIED: 11

};
module.exports = types;
