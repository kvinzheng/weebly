const expect = require('chai').expect; // jshint ignore:line
const { flatten } = require('./flatten.js');

describe('flatten', () => {
  it('returns a single-dimensional array of all of the values', () => {
    expect(flatten([])).to.deep.equal([]);
    expect(flatten([1])).to.deep.equal([1]);
    expect(flatten([[1]])).to.deep.equal([1]);
    expect(flatten([[[1]]])).to.deep.equal([1]);
    expect(flatten([[[[1]]]])).to.deep.equal([1]);
    expect(flatten([1, [2], [3,4], [5, [6, [7]]]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

});
