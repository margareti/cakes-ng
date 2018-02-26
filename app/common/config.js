/* eslint-disable no-undef */

// NOTE: This is a simple wrapper around the CONFIG variable that is set by
// Webpack, we need to disable the no-undef eslint rule because eslint doesn't
// know the variable exists.
angular
  .module('cakesss')
  .constant('config', CONFIG);
/* eslint-enable no-undef */