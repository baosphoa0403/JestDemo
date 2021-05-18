const { expect } = require("@jest/globals");
const subStract = require("../Code/substract");

test('1 sub 2 equal -1 ', () => {
    expect(subStract(1, 2)).toBe(-1);
})
