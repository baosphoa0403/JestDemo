// import { listPizzas } from "../data.json";
const listPizzas = require('../data.json');

// test('The pizzas data is correct', () => {
//   expect(listPizzas).toMatchSnapshot();
//   expect(listPizzas).toHaveLength(4);
//   expect(listPizzas.map((item) => item.name)).toEqual([
//     'Chicago Pizza',
//     'Neapolitan Pizza',
//     'New York Pizza',
//     'Sicilian Pizza',
//   ]);
// });

// for (let i = 0; i < listPizzas.length; i++) {
//   test(`test pizza[${i}] should have properties (id, name, images, desc, price)`, () => {
//     expect(listPizzas[i]).toHaveProperty('id');
//     expect(listPizzas[i]).toHaveProperty('name');
//     expect(listPizzas[i]).toHaveProperty('image');
//     expect(listPizzas[i]).toHaveProperty('desc');
//     expect(listPizzas[i]).toHaveProperty('price');
//   });
// }
//  mock function
// test('mock implementation of a basic function ', () => {
//   const mock = jest.fn(() => 'I m a mock function');
//   console.log(mock);
//   expect(mock('calling  my mock  function')).toBe('I m a mock function');
//   expect(mock).toHaveBeenCalledWith('Calling my mock function');
// });

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }
// test('test mock function callBack ', () => {
//   const mockCallback = jest.fn((x) => 42 + x);
//   forEach([0, 1], mockCallback);
//   // The mock function is called twice
//   console.log(mockCallback.mock);
// //   console.log(mockCallback.mock.calls[1][0]);
//   expect(mockCallback.mock.calls.length).toBe(2);
//   expect(mockCallback.mock.calls[0][0]).toBe(0);
//   expect(mockCallback.mock.calls[1][0]).toBe(1);
//   expect(mockCallback.mock.results[0].value).toBe(42);
// });


test('test mock return value  of a function  one time ', () => {
    const myMock = jest.fn();
    // const a = new myMock();
    // const b = {};
    // const bound = myMock.bind(b);
    // bound();    

    // console.log(myMock.mock.instances);
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock());
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    console.log(result);

})
