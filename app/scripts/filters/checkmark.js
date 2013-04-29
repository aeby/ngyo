'use strict';

angular.module('ngyoApp')
    .filter('checkmark', [function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    }]);
