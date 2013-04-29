'use strict';

angular.module('ngyoApp')
    .controller('PhonelistCtrl', ['$scope', 'phoneService', function ($scope, phoneService) {
        $scope.phones = phoneService.query();
        $scope.orderProp = 'age';
    }]);
