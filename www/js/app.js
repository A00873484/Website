// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('tabs', {
    url: '/tab',
    abstract: true, 
    templateUrl: 'templates/tabs.html'
  })
  .state('tabs.list', {
    url:'/list',
    views: {
      'list-tab' : {
        templateUrl: 'templates/list.html',
        controller: 'SubmitionController'
      }
    }
  })
  .state('tabs.tithe', {
    url:'/tithe',
    views: {
      'tithe-tab' : {
        templateUrl: 'templates/addtithe.html',
        controller: 'SubmitController'
      }
    }
  })
  .state('tabs.member', {
    url:'/member',
    views: {
      'member-tab' : {
        templateUrl: 'templates/addmember.html',
        controller: 'SubmitController'
      }
    }
  })
  .state('login', {
    url:'/login',
    templateUrl: 'views/login.html',
    controller: 'RegistrationController'
  })
  $urlRouterProvider.otherwise('/tab/list');
})