import './main.scss';

import './app';

import './layout/layoutController.js';
import './cakes/cakesController.js';
import './cakes/cakesDetailController.js';
import './add/addCakeController.js';
import './services/cakesService.js';
import './common/directives/backDirective.js';

angular
  .module('cakesss')
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/cakes');
  });