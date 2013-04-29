'use strict';

describe('Controller: PhonelistCtrl', function () {

  // load the controller's module
  beforeEach(module('ngyoApp'));

  var PhonelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonelistCtrl = $controller('PhonelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
