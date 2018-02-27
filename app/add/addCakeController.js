import template from './add.html';
import '../cakes/cakes.scss';


class AddCakeController {
  constructor($log, cakesService, $state) {
    this.log = $log;
    this.cakesService = cakesService;
    this.state = $state;
    this.cake = {
      yumFactor: 0,
      comment: ''
    };
  }

  submit(cake) {
    this.cakesService.addCake(cake).then(() => {
      this.state.go('public.cakes');
    })
  }
}

angular
  .module('cakesss')
  .controller('AddCakeController', AddCakeController)
  .config(($stateProvider) => {
    $stateProvider.state('public.add', {
      url: '/add-cake',
      views: {
        'app@': {
          controller: 'AddCakeController',
          controllerAs: '$ctrl',
          template: template
        }
      }
    });
  });