const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {

  if (!config.module) {
    config.module = {}
  }

  if (!config.module.rules) {
    config.module.rules = []
  }

  config.module.rules.push(
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    },
  )

  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

  if (!config.resolve.fallback) {
    config.resolve.fallback = {}
  }

  Object.assign(config.resolve.fallback, {
    "url": false,
    "stream": false,
    "https": false,
    "assert": false,
    "tty": false,
    "os": false,
    "zlib": false,
    "fs": false,
    "path": false,
    "http": false,
    "util": false,
  })

  return config
}