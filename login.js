const axios = require('axios');
const DefaultError = require('./Error/error.js');
const AuthenticationError = require('./Error/error.js');
const login = async (email, password) => {
  const user = {
    email,
    password,
  };
  console.log(user);
  try {
    const res = await axios({
      method: 'Post',
      url: 'https://nike0403.herokuapp.com/users/login',
      user,
    });
    console.log(res);
    return res;
    // alert('login success');
  } catch (error) {
    console.log(error);
    if (error.status === AuthenticationError.STATUS_CODE) {
      throw new AuthenticationError();
    }
    throw new DefaultError();
  }
};
// const login = (email, password) => {
//   return axios
//     .post('https://nike0403.herokuapp.com/users/login', {
//       user: {
//         email,
//         password,
//       },
//     })
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log({ ...error });
//       // Handles the error how you want it
//       if (error.status === AuthenticationError.STATUS_CODE) {
//         throw new AuthenticationError();
//       }
//       throw new DefaultError();
//     });
// };
module.exports = login;
