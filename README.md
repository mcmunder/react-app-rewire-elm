# react-app-rewired-elm

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
