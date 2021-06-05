import shoesService from './Shoes/Service/index.js';
import Shoes from './Shoes/Model/index.js';
import userService from './User/Service/index.js';
const callAPI = async () => {
  // call list shoes
  try {
    const res = await shoesService.getAllShoes();
    console.log('hello gia bảo ');
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const callAPIdetailShoes = async () => {
  const id = '5f82f4c0de96ef2b3d91c17c';
  try {
    const resDetail = await shoesService.getDetailShoes(id);
    console.log(resDetail);
  } catch (error) {
    console.log(error.response.data);
  }
};

// const createShoes = async () => {
//    const img = "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/12651239_197793903908105_6634826857517071349_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=pEtAVmmXQCgAX_Jojhg&_nc_ht=scontent.fhan14-2.fna&oh=1d89776eb159fd6296d3d067df769e8a&oe=60DF6B31"
//    const sizes = [
//       {
//          size: "A"
//       }
//    ];
//    const imgDetail = [
//       {
//          color: "red",
//          imgs: [
//             {
//                img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/87962881_1091364374551049_6518160278146777088_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=UmpuMO2Vv5cAX-iM7jW&_nc_ht=scontent.fhan14-2.fna&oh=54fb8c34b1fd03d3410ece28e5df7d4a&oe=60E08A21"
//             }
//           ]
//       }
//    ]
//    const shoes = new Shoes("hihi", "male", "shoes", "abc", "bảo đẹp trai", 2, 10000, img, sizes, imgDetail, "601822a6d77de10017f2c6c0");
//    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE4MjJhNmQ3N2RlMTAwMTdmMmM2YzAiLCJpYXQiOjE2MjI4OTQ5NjksImV4cCI6MTYyNTU3MzM2OX0.ZyZnFywTs4iQJZPTS2_UNauLE-5jg2xBp73tqUgvKNo"
//    try {
//       const resCreated = await shoesService.createShoes(token, shoes);
//       console.log(resCreated);
//    } catch (error) {
//       console.log({...error});
//    }
// }
// createShoes()
callAPI();
// callAPIdetailShoes();

const callAPIloginUser = async (user) => {
  console.log(user);
  try {
    const res = await userService.login(user);
    console.log(res);
    alert('login success');
  } catch (error) {
    console.log(error.response.data);
    alert('login fail');
  }
};

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = {
    email,
    password,
  };
  callAPIloginUser(user);
}

document.getElementById('sub').addEventListener('click', login);
