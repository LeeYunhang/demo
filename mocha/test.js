var assert = require('assert');
var should = require('should')

it('should return -1 when the value is not present', function() {
  assert.equal(-1, [1,2,3].indexOf(4));
  [1, 2, 3].indexOf(0).should.equal(-1)
})