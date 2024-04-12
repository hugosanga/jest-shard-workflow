const add = require("../add")

describe('add', () => {
  it('should return the sum of the numbers', () => {
    expect(add(2, 3)).toEqual(2);
  })
})
