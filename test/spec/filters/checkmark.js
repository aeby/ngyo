'use strict';

describe('Filter: checkmark', function () {

  // load the filter's module
  beforeEach(module('ngyoApp'));

  // initialize a new instance of the filter before each test
  var checkmark;
  beforeEach(inject(function($filter) {
    checkmark = $filter('checkmark');
  }));

  it('should return the input prefixed with "checkmark filter:"', function () {
    var text = 'angularjs';
    expect(checkmark(text)).toBe('checkmark filter: ' + text);
  });

});
