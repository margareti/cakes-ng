import './main.scss';

import './app';

import './layout/layoutController.js';
import './cakes/cakesController.js';
import './cakes/cakesDetailController.js';
import './cakes/addCakeController.js';

import './services/cakesService.js';

angular
  .module('cakesss')
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/cakes');
  });