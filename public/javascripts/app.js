'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('FaaSApp', [
  'ngRoute',

  'FaaSApp.controllers',
  'FaaSApp.filters',
  'FaaSApp.services',
  'FaaSApp.directives',

  // 3rd party dependencies
  //'btford.socket-io'
]).

config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/wallet', {
      templateUrl: 'partials/wallet',
      controller: 'WalletCtrl'
    }).
    when('/account', {
      templateUrl: 'partials/account',
      controller: 'AccountCtrl'
    }).
    otherwise({
      templateUrl: 'partials/login',
      controller: 'LoginCtrl'
    });

  $locationProvider.html5Mode(true);
});

