'use strict';

angular.module('ngyoApp')
    .controller('PhonedetailCtrl', ['$scope', '$routeParams', 'phoneService', function ($scope, $routeParams, phoneService) {
        $scope.phone = phoneService.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
