'use strict';

describe('Service: phoneService', function () {

  // load the service's module
  beforeEach(module('ngyoApp'));

  // instantiate service
  var phoneService;
  beforeEach(inject(function(_phoneService_) {
    phoneService = _phoneService_;
  }));

  it('should do something', function () {
    expect(!!phoneService).toBe(true);
  });

});
