(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular
      .module('stuff', [ 'ngMaterial', 'ui.router', 'firebase' ])
      .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
              url:'/home',
              templateUrl: "src/view/home/home.html"
            })
            .state('collections',{
              url:'/collections',
              templateUrl: "src/view/collections/collections.html",
              controller: 'myStuffController',
              controllerAs: 'self'
            })
            .state('notes',{
                url:'/notes',
                templateUrl: "src/view/world-stuff/world-stuff.html"
            })

      })



})();
