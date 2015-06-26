var messages = {};

var util = require('../util');


util.defineString(messages, 'SUCCESS', "成功!");
util.defineString(messages, 'FAILURE', "失败!");
util.defineString(messages, 'FAILED', "失败了!");
util.defineString(messages, 'ERROR', "错误!");
util.defineString(messages, 'NOT_FOUND', "没有找到!");
util.defineString(messages, 'EXISTED', "已经存在!");
util.defineString(messages, 'NOT_SPECIFIED', "未指定!");
util.defineString(messages, 'NOT_LOGIN', "尚未登录!");
util.defineString(messages, 'REQUIRED', "必需有!");
util.defineString(messages, 'UNKNOWN_ERROR', "未知错误!");

util.defineString(messages, 'USER_EXISTED', "用户已经存在!");
util.defineString(messages, 'USER_NOT_FOUND', "用户未找到!");
util.defineString(messages, 'USER_NOT_LOGIN', "用户尚未登录!");

util.defineString(messages, 'USERNAME_EXISTED', "用户名已经存在!");
util.defineString(messages, 'USER_NAME_EXISTED', "用户名已经存在!");
util.defineString(messages, 'DATABASE_ERROR', "数据库错误!");

//密码相关错误
util.defineString(messages, 'PASSWORD_ERROR', "密码错误!");
util.defineString(messages, 'PASSWORD_NOT_SPECIFIED', "密码未指定!");


util.defineString(messages, 'FILE_NOT_FOUND', "文件未找到!");

util.defineString(messages, 'ADMIN_EXISTED', "管理员已经存在!");
util.defineString(messages, 'ADMINISTRATOR_EXISTED', "管理员已经存在!");

util.defineString(messages, 'ADMIN_NOT_FOUND', "管理员未找到!");
util.defineString(messages, 'ADMINISTRATOR_NOT_FOUND', "管理员未找到!");

util.defineString(messages, 'ADMIN_NOT_LOGIN', "管理员未登录!");
util.defineString(messages, 'ADMINISTRATOR_NOT_LOGIN', "管理员未登录!");


util.defineString(messages, 'MERCHANT_NOT_LOGIN', "商户未登录!");

util.defineString(messages, 'UPDATE_FAILED', "更新失败!");

util.defineString(messages, 'INPUT_INVALID', "输入无效!");

util.defineString(messages, 'NUMERIC_REQUIRED', "必须是数值!");

util.defineString(messages, 'NAME_NOT_SPECIFIED', "名字未指定!");

util.defineString(messages, 'EMAIL_NOT_SPECIFIED', "邮箱未指定!");
util.defineString(messages, 'EMAIL_EXISTED', "邮箱已经存在!");

util.defineString(messages, 'CATEGORY_NOT_FOUND', "分类未找到!");
util.defineString(messages, 'PHONE_EXISTED', "手机已存在!");
util.defineString(messages, 'NETWORK_ERROR', "网络错误!");

util.defineString(messages, 'APP_ID_ERROR', "应用ID错误!");
util.defineString(messages, 'APPLICATION_ID_ERROR', "应用ID错误!");

module.exports = messages;
