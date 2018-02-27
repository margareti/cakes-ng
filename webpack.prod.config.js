const webpack = require('webpack');
let commonConf = require('./webpack.config');

module.exports = env => {
  let config = commonConf(env);
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourceMap: false
  }));

  return config;
};