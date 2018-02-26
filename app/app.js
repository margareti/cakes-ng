import 'angular';
import 'angular-animate/angular-animate';
import 'angular-sanitize/angular-sanitize';
import 'ionic';
import 'ionic-angular';
import uiRouter from 'angular-ui-router';

// import {StatusBar} from 'ionic-native';

export default angular
  .module('cakesss', [
    'ionic',
    uiRouter
  ])
  .run(($rootScope, $ionicSideMenuDelegate) => {
    var canSwipe = $rootScope.$on('$ionicView.beforeEnter', function () {
      if ($ionicSideMenuDelegate.canDragContent()) {
        $ionicSideMenuDelegate.canDragContent(false);
      }
    });
    $rootScope.$on('$destroy', canSwipe);
  });