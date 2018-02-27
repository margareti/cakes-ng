import template from './cakes.html';
import './cakes.scss';


class CakesController {
  constructor($log, cakesService, $state) {
    this.log = $log;
    this.cakesService = cakesService;
    this.state = $state;
    this.init();
  }

  init() {
    this.cakesService.getAllCakes().then((response) => {
      this.cakes = response;
    });
  }

  goToCake(id) {
    this.log.info('moo ', id)
    this.state.go('public.cake', ({id: id}))
  }
}

angular
  .module('cakesss')
  .controller('CakesController',CakesController)
  .config(($stateProvider) => {
    $stateProvider.state('public.cakes', {
      url: '/cakes',
      controller: 'CakesController',
      controllerAs: '$ctrl',
      template: template
    });
  });