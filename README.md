#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> web-errors for all restful apis


## Install

```sh
$ npm install --save web-errors
```


## Usage

```js
var errors = require('web-errors').errors;

```

```sh
# creates a browser.js
$ npm run browser
```

## Errors


```js

//Basic/generic errors

errors.SUCCESS
errors.FAILURE
errors.FAILED
errors.ERROR
errors.NOT_FOUND
errors.EXISTED
errors.NOT_SPECIFIED
errors.NOT_LOGIN
errors.REQUIRED

errors.UNKNOWN_ERROR

//User related errors
errors.USER_EXISTED
errors.USER_NOT_FOUND
errors.USER_NOT_LOGIN

//User name related errors
errors.USERNAME_EXISTED

//Database errros
errors.DATABASE_ERROR


//Password related errors
errors.PASSWORD_ERROR
errors.PASSWORD_NOT_SPECIFIED




//File related errors
errors.FILE_NOT_FOUND


//Administrator related errors

errors.ADMIN_EXISTED
errors.ADMINISTRATOR_EXISTED

errors.ADMIN_NOT_FOUND
errors.ADMINISTRATOR_NOT_FOUND


errors.ADMIN_NOT_LOGIN
errors.ADMINISTRATOR_NOT_LOGIN


//Merchant errors
errors.MERCHANT_NOT_LOGIN


//Action errors
errors.UPDATE_FAILED
errors.INPUT_INVALID
errors.NUMERIC_REQUIRED
errors.NAME_NOT_SPECIFIED


//Email related errors
errors.EMAIL_NOT_SPECIFIED
errors.EMAIL_EXISTED

//Category related errors
errors.CATEGORY_NOT_FOUND


//Phone related errors
errors.PHONE_EXISTED


//Network errors
errors.NETWORK_ERROR

```




## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/web-errors.svg
[npm-url]: https://npmjs.org/package/web-errors
[travis-image]: https://travis-ci.org/Web-Errors/node.svg?branch=master
[travis-url]: https://travis-ci.org/Web-Errors/node
[daviddm-image]: https://david-dm.org/Web-Errors/node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Web-Errors/node
