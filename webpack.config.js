// var path = require('path');
// var libPath = path.join(__dirname, 'app');
// var wwwPath = path.join(__dirname, 'www');
// var pkg = require('./package.json');
// var webpack = require("webpack");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var WriteFilePlugin = require('write-file-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// var nodeModules = path.resolve(__dirname, 'node_modules');
// var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
// var pathToIonic = path.resolve(nodeModules, 'ionic-sdk/release/js/ionic.min.js');
// var pathToIonicAngular = path.resolve(nodeModules, 'ionic-sdk/release/js/ionic-angular.min.js');

// module.exports = function (env) {
//   return {
//     entry: path.join(libPath, 'index.js'),
//     output: {
//       publicPath: '',
//       path: wwwPath,
//       filename: 'app.js'
//     },
//     cache: true,
//     devtool: 'eval',
//     devServer: {
//       inline: true,
//       progress: true,
//       port: 3000
//     },
//     module: {
//       noParse: [/angular\.min\.js/, /ionic\.min\.js/, /ionic-angular\.min\.js/],
//       rules: [{
//         test: /\.html$/,
//         loader: 'html-loader'
//       }, {
//         test: /\.json$/,
//         loader: "json-loader"
//       }, {
//         test: /\.(png|jpg)$/,
//         loader: 'file-loader?name=img/[name].[ext]'
//       }, {
//         test: /\.css$/,
//         loader: "style-loader!css-loader"
//       }, {
//         test: /\.js$/,
//         exclude: /(node_modules)|\.spec\.js/,
//         loader: "babel-loader?presets[]=es2015,presets[]=stage-0&cacheDirectory=true!eslint-loader"
//       }, {
//         test: /\.spec\.js$/,
//         exclude: /(node_modules)/,
//         loader: "babel-loader?presets[]=es2015,presets[]=stage-0&cacheDirectory=true"
//       }, {
//         test: /\.scss$/,
//         loader: "style-loader!css-loader!autoprefixer-loader!sass-loader?"
//       }]
//     },
//     resolve: {
//       extensions: ['.js', '.json', '.scss', '.html'],
//       modules: [libPath, path.join(__dirname, 'node_modules')],
//       alias: {
//         'angular': pathToAngular,
//         'ionic': pathToIonic,
//         'ionic-angular': pathToIonicAngular
//       }
//     },
//     plugins: [
//       new OpenBrowserPlugin({ url: 'http://localhost:3000/#/' }),
//       new HtmlWebpackPlugin({
//         filename: 'index.html',
//         pkg: pkg,
//         template: path.join(libPath, 'index.ejb')
//       }),
//       new WriteFilePlugin()
//     ]
//   }
// };

var path = require('path');
var libPath = path.join(__dirname, 'app');
var wwwPath = path.join(__dirname, 'www');
var pkg = require('./package.json');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var nodeModules = path.resolve(__dirname, 'node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
var pathToIonic = path.resolve(nodeModules, 'ionic-sdk/release/js/ionic.min.js');
var pathToIonicAngular = path.resolve(nodeModules, 'ionic-sdk/release/js/ionic-angular.min.js');

module.exports = function (env) {
  return {
    entry: path.join(libPath, 'index.js'),
    output: {
      publicPath: '',
      path: wwwPath,
      filename: 'app.js'
    },
    cache: true,
    devtool: 'eval',
    devServer: {
      inline: true,
      progress: true,
      port: 3000
    },
    module: {
      noParse: [/angular\.min\.js/, /ionic\.min\.js/, /ionic-angular\.min\.js/],
      rules: [{
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.js$/,
        exclude: /(node_modules)|\.spec\.js/,
        loader: "babel-loader?presets[]=es2015,presets[]=stage-0&cacheDirectory=true!eslint-loader"
      }, {
        test: /\.spec\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader?presets[]=es2015,presets[]=stage-0&cacheDirectory=true"
      }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader?"
      }]
    },
    resolve: {
      extensions: ['.js', '.json', '.scss', '.html'],
      modules: [libPath, path.join(__dirname, 'node_modules')],
      alias: {
        'angular': pathToAngular,
        'ionic': pathToIonic,
        'ionic-angular': pathToIonicAngular
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        CONFIG: JSON.stringify(require('./config/config.' + (env || 'local') + '.json'))
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:3000/#/' }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(libPath, 'index.ejb')
      }),
      new WriteFilePlugin()
    ]
  }
};