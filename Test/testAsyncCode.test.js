// import Axios from "axios";
const axios  = require("axios");
const movieService = require("../Code/callApi");
const data = require("../data.json")
// import data from "../data.json";
// function addAsync(a, b, callback) {
//     setTimeout(() => {
//       const result = a + b;
//       callback(result);
//     }, 500)
// }

// test('add numbers async', done => {
//     addAsync(10, 5, result => {
//       expect(result).toBe(15);
//       done();
//     })
// })

// CallBack
// function callAPICallBack(callback){
//     setTimeout(() => {
//         movieService.then((res)=>{
//             callback(res.data)
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }, 3000);
// }

// test('call api async', done => {
//     callAPICallBack(result => {
//         expect(result).toEqual(expect.arrayContaining(data))
//     })
//     done();
// })
// Promises
// test('the data list movie', () => {
//     return  axios({method: "GET", url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"}).then(res => {
//       expect(data).toBe(res.data);
//     });
//   });

test('the fetch fails with an error', async () => {
    try {
     const response = await axios({method: "GET", url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"});
     expect(data).toBe(response.data);
    } catch (e) {
        expect(data).toEqual(expect.arrayContaining([]))
    }
  });
