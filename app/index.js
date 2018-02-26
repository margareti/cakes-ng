import './main.scss';

import './app';
import './common/config';
import './layout/layoutController.js';
import './landing/landingController.js';

import './services/cakesService.js';

angular
  .module('cakesss')
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/landing');
  });