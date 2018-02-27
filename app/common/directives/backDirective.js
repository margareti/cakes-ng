angular.module('cakesss').directive('back', ($state) => {
  return {
    restrict: 'A',
    link: () => {
      $state.go('public.cakes');
    }
  };
});
