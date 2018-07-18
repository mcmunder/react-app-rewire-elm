const {append, insert, lensPath, pipe, set, view} = require('ramda')

module.exports.rewireElm = config => {
  const appendElmToExtensions = config => {
    const extensionsLens = lensPath(['resolve', 'extensions'])
    const appendElmExtensions = pipe(
      view(extensionsLens),
      append('.elm')
    )

    return set(extensionsLens, appendElmExtensions(config), config)
  }

  const excludeElmInFileLoader = config => {
    const fileLoaderExcludeLens = lensPath([
      'module',
      'rules',
      1,
      'oneOf',
      3,
      'exclude'
    ])

    const excludeElmExtension = pipe(
      view(fileLoaderExcludeLens),
      append('/.elm$/')
    )

    return set(fileLoaderExcludeLens, excludeElmExtension(config), config)
  }

  const addElmLoader = config => {
    const oneOfLens = lensPath(['module', 'rules', 1, 'oneOf'])
    const addLoader = pipe(
      view(oneOfLens),
      insert(3, {
        test: /\.elm$/,
        exclude: [/node_modules/],
        loader: require.resolve('elm-webpack-loader')
      })
    )

    return set(oneOfLens, addLoader(config), config)
  }

  const elmifyConfig = pipe(
    appendElmToExtensions,
    excludeElmInFileLoader,
    addElmLoader
  )

  return elmifyConfig(config)
}
