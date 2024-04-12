const multiply = require("../multiply")

describe('multiply', () => {
  it('should return the multiplication of the numbers', () => {
    expect(multiply(2, 3)).toEqual(6);
  })
})
