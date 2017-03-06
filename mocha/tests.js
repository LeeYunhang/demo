var should = chai.should();
describe('simple test', function() {
  it('should return 21 when n === 13', function() {
    window.fibonacci(8).should.equal(21)
  });
});