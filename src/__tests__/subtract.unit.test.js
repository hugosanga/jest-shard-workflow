const subtract = require("../subtract")

describe('subtract', () => {
  it('should return the subtraction of the numbers', () => {
    expect(subtract(3, 2)).toEqual(1);
  })
})
