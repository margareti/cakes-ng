import './main.scss';

import './app';

import './layout/layoutController.js';
import './cakes/cakesController.js';
import './cakes-detail/cakesDetailController.js';
import './add/addCakeController.js';

import './services/cakesService.js';

angular
  .module('cakesss')
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/cakes');
  });