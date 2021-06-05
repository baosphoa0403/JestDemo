// import Axios from "axios";
// const axios = require('axios');
// const data = require('../data.json');
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

// test('fetch list movie with promise', async () => {
//   return axios({
//     method: 'GET',
//     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//   })
//     .then((res) => {
//       expect(data).toEqual(expect.arrayContaining(res.data));
//     })
//     .catch((e) =>
//       expect(e.response.data).toEqual(
//         expect.stringContaining('Nhóm người dùng không hợp lệ!')
//       )
//     );
// });

// test('the fetch list movie  async await', async () => {
//   try {
//     const response = await axios({
//       method: 'GET',
//       url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//     });
//     expect(data).toEqual(expect.arrayContaining(response.data));
//   } catch (e) {
//     expect(e.response.data).toEqual(
//       expect.stringContaining('Nhóm người dùng không hợp lệ!')
//     );
//   }
// });
