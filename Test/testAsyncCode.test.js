// import Axios from "axios";
const data = require('../data.json');
const movieService = require('../Code/callApi');
// callback
// function addAsync(a, b, callback) {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 5000);
// }

// test('add numbers async', (done) => {
//   addAsync(10, 5, (result) => {
//     expect(result).toBe(15);
//     done();
//   });
// });

test('fetch list movie with promise', async () => {
  return movieService
    .getListMovie()
    .then((res) => {
      expect(data).toEqual(expect.arrayContaining(res.data));
    })
    .catch((e) =>
      // console.log(e),
      expect(e.response.data).toEqual(
        expect.stringContaining('Nhóm người dùng không hợp lệ!')
      )
    );
});

// test('the fetch list movie  async await', async () => {
//   try {
//     const response = await movieService.getListMovie();
//     expect(data).toEqual(expect.arrayContaining(response.data));
//   } catch (e) {
//     console.log(e);
//     expect(e.response.data).toEqual(
//       expect.stringContaining('Nhóm người dùng không hợp lệ!')
//     );
//   }
// });
