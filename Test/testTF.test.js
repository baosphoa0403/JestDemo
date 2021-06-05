// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });
  
// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });
// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
//   });

// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
// }
  
//   test('compiling android goes as expected', () => {
//     expect(() => compileAndroidCode()).toThrow();
//     expect(() => compileAndroidCode()).toThrow(Error);
  
//     // You can also use the exact error message or a regexp
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//     expect(() => compileAndroidCode()).toThrow(/JDK/);
//   });
test("Test description", () => {
    const t = () => {
      throw new TypeError("UNKNOWN ERROR");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("UNKNOWN ERROR");
  });