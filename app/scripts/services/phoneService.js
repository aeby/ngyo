'use strict';

angular.module('ngyoServices', ['ngResource'])
  .factory('phoneService', ['$resource', function($resource) {
    return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
  }]);
