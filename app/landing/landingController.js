import template from './landing.html';
import './landing.scss';


class LandingController {
  constructor($log, cakesService) {
    this.log = $log;
    this.cakesService = cakesService;
    this.init();
  }

  init() {
    this.cakesService.getAllCakes().then((response) => {
      this.cakes = response;
    });
  }
}

angular
  .module('cakesss')
  .controller('LandingController', LandingController)
  .config(($stateProvider) => {
    $stateProvider.state('public.landing', {
      url: '/landing',
      controller: 'LandingController',
      controllerAs: '$ctrl',
      template: template
    });
  });