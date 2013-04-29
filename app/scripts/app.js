'use strict';

angular.module('ngyoApp', ['ngyoServices'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/phones', {
        templateUrl: 'views/phonelist.html',
        controller: 'PhonelistCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/phonedetail.html',
        controller: 'PhonedetailCtrl'
      })
      .otherwise({
        redirectTo: '/phones'
      });
  }]);
