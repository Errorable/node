var messages = {};

var util = require('../util');

util.defineString(messages, 'SUCCESS', "Success!");
util.defineString(messages, 'FAILURE', "Failure!");
util.defineString(messages, 'FAILED', "Failed!");
util.defineString(messages, 'ERROR', "Error!");
util.defineString(messages, 'NOT_FOUND', "Not Found!");
util.defineString(messages, 'EXISTED', "Existed!");
util.defineString(messages, 'NOT_SPECIFIED', "Not Specified!");
util.defineString(messages, 'NOT_LOGIN', "Not Login!");
util.defineString(messages, 'REQUIRED', "Required!");
util.defineString(messages, 'UNKNOWN_ERROR', "Unknown Error!");

util.defineString(messages, 'USER_EXISTED', "User Existed!");
util.defineString(messages, 'USER_NOT_FOUND', "User Not Found!");
util.defineString(messages, 'USER_NOT_LOGIN', "User Not Login!");

util.defineString(messages, 'USERNAME_EXISTED', "Username Existed!");
util.defineString(messages, 'USER_NAME_EXISTED', "Username Existed!");

util.defineString(messages, 'DATABASE_ERROR', "Database Error!");

//Password errors
util.defineString(messages, 'PASSWORD_ERROR', "Password Error!");
util.defineString(messages, 'PASSWORD_NOT_SPECIFIED', "Password Not Specified!");


util.defineString(messages, 'FILE_NOT_FOUND', "File Not Found!");

util.defineString(messages, 'ADMIN_EXISTED', "Administrator Existed!");
util.defineString(messages, 'ADMINISTRATOR_EXISTED', "Administrator Existed!");

util.defineString(messages, 'ADMIN_NOT_FOUND', "Administrator Not Found!");
util.defineString(messages, 'ADMINISTRATOR_NOT_FOUND', "Administrator Not Found!");

util.defineString(messages, 'ADMIN_NOT_LOGIN', "Administrator Not Login!");
util.defineString(messages, 'ADMINISTRATOR_NOT_LOGIN', "Administrator Not Login!");


util.defineString(messages, 'MERCHANT_NOT_LOGIN', "Merchant Not Login!");

util.defineString(messages, 'UPDATE_FAILED', "Update Failed!");

util.defineString(messages, 'INPUT_INVALID', "Input Invalid!");

util.defineString(messages, 'NUMERIC_REQUIRED', "Numeric Required!");

util.defineString(messages, 'NAME_NOT_SPECIFIED', "Name Not Specified!");

util.defineString(messages, 'EMAIL_NOT_SPECIFIED', "Email Not Specified!");
util.defineString(messages, 'EMAIL_EXISTED', "Email Existed!");


util.defineString(messages, 'CATEGORY_NOT_FOUND', "Category Not Found!");
util.defineString(messages, 'PHONE_EXISTED', "Phone Existed!");
util.defineString(messages, 'NETWORK_ERROR', "Network Error!");

util.defineString(messages, 'APP_ID_ERROR', "Application ID Error!");
util.defineString(messages, 'APPLICATION_ID_ERROR', "Application ID Error!");





module.exports = messages;
