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
    this.state.go('cake', ({id: id}))
  }

  goToUpload() {
    this.state.go('upload');
  }
}

angular
  .module('cakesss')
  .controller('CakesController',CakesController)
  .config(($stateProvider) => {
    $stateProvider.state('cakes', {
      url: '/cakes',
      views: {
        'app@': {
          controller: 'CakesController',
          controllerAs: '$ctrl',
          template: template
        }
      }
    });
  });