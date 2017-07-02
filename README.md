We :revolving_hearts: Koa.js
================================
[![dependencies](https://david-dm.org/jimzhan/base.js.svg)](https://david-dm.org/jimzhan/base.js.svg)
[![build](https://travis-ci.org/jimzhan/base.js.svg?branch=master)](https://travis-ci.org/jimzhan/base.js)
[![npm version](https://img.shields.io/npm/v/base.js.svg?style=flat-square)](https://www.npmjs.com/package/base.js)
[![npm downloads](https://img.shields.io/npm/dm/base.js.svg?style=flat-square)](https://www.npmjs.com/package/base.js)

Production application boilerplate for Koa, batteries included:
+ ES6 + Babel
+ [ESLint](https://github.com/eslint/eslint) with the [Airbnb JavaScript](https://github.com/airbnb/javascript) rules.
+ [ApiDoc](http://apidocjs.com/) creates a documentation from API annotations in your source code.
+ [Mocha](https://github.com/mochajs/mocha) Unit testing and coverage with [Chai](https://github.com/chaijs/chai) assertion framework.
+ [Editorconfig](http://editorconfig.org/) Consistent coding styles formatter.
+ [Yarn](https://yarnpkg.com/en/) Dependency management.
+ [Koa.js](https://github.com/koajs/koa) Next generation web framework.
+ [Dotenv](https://github.com/motdotla/dotenv) Production settings profile solution.
+ [JSON Web Tokens](https://jwt.io/) Industry standard RFC 7519 method for representing claims securely between two parties.

## Key NPM Scripts
* `npm start` - start Koa with hot reload supports (default port `3000`).
* `npm run docs` - generate API docs in `docs` folder (ignored by git) & start serving.

## Batteries included 
* configurable prefixed server endpoint (`/v1` by default).
* JWT based authentication.
* common middleware.
* intelligent/automatic config registration.
* intelligent/automatic routes registration.

  Module created under `apps` folder with routes defined in `index.js` will be registered onto server router automatically.
```javscript
// OPTIONAL prefix definition, by default, system will register the module name as its routing prefix.
//  `prefix -> false` will disable prefix for this module.
export const prefix = '/<module-prefix>';

import * as mw from './middleware';
import * as views from './views';

export default {
  'GET /', views.list,
  'GET /:key', views.get,
  'POST /', [mw.acl, views.create],
  'PUT  /:key', views.update,
  'DELETE /:key', views.delete,
}
```
* module alias support

```javascript
// Use this:
import MyUtilFn from 'utils/MyUtilFn';
// Instead of that:
import MyUtilFn from '../../../../utils/MyUtilFn';
```

TODOs
=====
- [x] ESLint rules supports.
- [x] NPM scripts for common operations.
- [x] `dotenv` based multi settings profiles at server side.
- [x] Grouped routing system.
- [x] Grouped settings system.
- [x] unit test integration
- [x] hot reload koa server
- [ ] common helpers.