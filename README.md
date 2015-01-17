web-errors
============

 [![Build Status](https://travis-ci.org/calidion/web-errors.svg)](https://travis-ci.org/calidion/web-errors)

a standard error library for web functions and http responses.

# ERROR CODE FORMAT:

```
 0x[31-24][23-16][15-8][7-0]
```

* [0-7]bit : ERROR TYPE Code
* [8-15]bit: EVENT Code
* [16-23]bit: ENTITY / PROPERTY Code
* [24-31]bit: ENTITY Code



# Benefits

  * Unified error definitions for both client and server sides.
  * Exchangeability between projects.
  * Easy i18n support for errors.

# Install

node:
```bash
npm install web-errors
```

browser:
```bash
npm install web-errors
```


# Usage:

#### Basic usage (the standard errors)

```javascript

var webErrors = require('web-errors');
var errors = webErrors.errors;

req.json(errors.UNKNOWN_ERR);

```

```html

    <script src="bower_components/web-errors/web-errors.js"></script>
    <script>
      var errors = webErrors.errors;
    </script>
```


#### Locales can be changed

```javascript
webErrors.setLocale('en');
webErrors.setLocale('zh-CN');
```

#### Customize user-defined errors

```javascript
var customEntities = {
    ENTITY1: 1,
    ENTITY2: 2,
    ENTITY3: 3
  },
  customEvents = {
    EVENT1: 1,
    EVENT2: 2,
    EVENT3: 3
  },
  customErrors = {
    ERROR1: 1,
    ERROR2: 2,
    ERROR3: 3
  };

var customCode = webErrors.make(customEntities.ENTITY1,
  customEntities.ENTITY2,
  customEvents.EVENT1,
  customErrors.ERROR1);

var customMessage = "MY ERROR!";
var customKey = 'MY_ERROR'
webErrors.add(customKey, customCode, customMessage)

```

#### Locales can be customized too

```javascript
var customLocaleMessage = "我的错误!";
var customLocale = 'zh-CN';

webErrors.updateLocaleItem(customMessage, customLocaleMessage, customLocale);
```