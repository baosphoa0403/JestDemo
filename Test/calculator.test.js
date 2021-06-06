const Calculator = require('../Code/calculator.js');
describe('calculator', () => {
  it('test calculator area of square', () => {
    // setup
    const calculator = new Calculator();

    const area = calculator.areaSquare(10);

    expect(area).toBe(100);
  });

  test('is leaf year return true ', () => {
    const calculator = new Calculator();

    expect(calculator.isleafYear(2000)).toBe(true);
    expect(calculator.isleafYear(2001)).toBe(false);
    expect(calculator.isleafYear(2002)).toBe(false);
    expect(calculator.isleafYear(2003)).toBe(false);
    expect(calculator.isleafYear(2004)).toBe(true);
    expect(calculator.isleafYear(2005)).toBe(false);
    expect(calculator.isleafYear(2006)).toBe(false);
  });
});
