const config = require('react-scripts/config/webpack.config.dev')

const {rewireElm} = require('./index.js')

describe('rewireElm', () => {
  test('produces expected webpack config', () => {
    expect(rewireElm(config)).toMatchSnapshot()
  })
})
