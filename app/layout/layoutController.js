import template from './layout.html';

angular
  .module('cakesss')
  .config(($stateProvider) => {
    $stateProvider.state('public', {
      abstract: true,
      views: {
        'app': {
          template: template
        }
      }
    });
  });
