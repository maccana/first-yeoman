'use strict';

/**
 * @ngdoc function
 * @name yoyoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoyoApp
 */
angular.module('yoyoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
