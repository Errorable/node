#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]


## Web errors provides an easy way to define and use errors for restful apis.


## Benefits OR Aims

>1.Unified Error Handling for servers and clients(browsers, android, ios)
>2.Customizable error definitions
>3.A standard general error standard for restful apis

## Install

> nodejs/iojs

```sh
$ npm install --save web-errors
```

> bower

```sh
$ bower install --save web-errors
```

## Usage

> nodejs/iojs

```js
var errors = require('web-errors').errors;
```

> browser

```html
<script src="bower_components/web-errors/dist/web-errors.js"></script>
```

## How to define errors

[example](lib/data)



### Usage:


```js
var webErrors = require('web-errors');

var conf = {
  data: {
    entities: '../lib/data/entities',
    properties: '../lib/data/properties',
    types: '../lib/data/types',
    events: '../lib/data/events',
    errors: '../lib/data/errors'
  },
  i18n: {
    "zh-CN": '../lib/data/i18n/zh-CN',
    "en-US": '../lib/data/i18n/en-US'
  }
};

webErrors.set(conf.data, config.i18n);
```




## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/web-errors.svg
[npm-url]: https://npmjs.org/package/web-errors
[travis-image]: https://travis-ci.org/Web-Errors/node.svg?branch=master
[travis-url]: https://travis-ci.org/Web-Errors/node
[daviddm-image]: https://david-dm.org/Web-Errors/node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Web-Errors/node
