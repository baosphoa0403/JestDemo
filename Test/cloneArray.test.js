// import {cloneArray} from "../Code/cloneArray";
const cloneArray = require("../Code/cloneArray")

test('clone array equal arrayAfter', () => {
    const array = [1,2,3];
    expect(cloneArray(array)).toStrictEqual(array)
})
