import template from './cake.html';
import './cakes.scss';


class CakesDetailController {
  constructor($log, cakesService, $stateParams, $window) {
    this.log = $log;
    this.cakesService = cakesService;
    this.stateParams = $stateParams;
    this.window = $window;
    this.init();
  }

  init() {
    this.cakesService.getCakeById(this.stateParams.id).then((response) => {
      this.cake = response;
    })

  }

  back() {
    this.window.history.back();
  }

}

angular
  .module('cakesss')
  .controller('CakesDetailController',CakesDetailController)
  .config(($stateProvider) => {
    $stateProvider.state('public.cake', {
      url: '/cake/:id',
      views: {
        'app@': {
          controller: 'CakesDetailController',
          controllerAs: '$ctrl',
          template: template
        }
      }
    });
  });