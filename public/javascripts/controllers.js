'use strict';

/* Controllers */

angular.module('FaaSApp.controllers', []).
  controller('LoginCtrl', [ '$scope', '$location', function ($scope, $location) {
    console.log('[LoginCtrl] Controller initiated...');

    $scope.generateWallet = function() {
      if ( $scope.passphrase ) {
        console.log('TODO: Generate here bitcoin wallet from passphrase.');
        $location.path('/wallet');
      }
    }

    $scope.generateNewPassphrase = function() {
      $scope.passphrase = "todo generate a valid 12 word passphrase"
    }
  }]).
  controller('WalletCtrl', [ '$scope', function ($scope ) {
    console.log('[WalletCtrl] Controller initiated...');
  }]).
  controller('AccountCtrl', [ '$scope', function ($scope) {
    console.log('[AccountCtrl] Controller initiated...');
  }]);

