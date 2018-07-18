# react-app-rewire-elm

Use elm in your create-react-app project without ejecting.

## Usage

```js
/* config-overrides.js */
const rewireElm = require('react-app-rewire-elm')

module.exports = function override(config, env) {
  config = rewireElm(config, env)
  return config
}
```

# Copyright and license

Copyright 2018, Matthias Munder.  
Licensed under the [MIT license](./LICENSE).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
