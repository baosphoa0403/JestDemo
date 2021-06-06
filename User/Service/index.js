const axios = require('axios');
// const DefaultError = require('../../Error/error.js');
const BadRequestError = require('../../Error/error.js');

class UserService {
  login = async (data) => {
    return await axios({
      method: 'Post',
      url: 'https://nike0403.herokuapp.com/users/login',
      data: data,
    });
  };
  getAllUser = async (token) => {
    return await axios({
      method: 'Get',
      url: 'https://nike0403.herokuapp.com/users',
      headers: { Authorization: `Bearer ${token}` },
    });
    // try {
      
    // } catch (error) {
    //   // console.log(error.response.status);
    //   // console.log(error.response.data.error);
    //   if (error.response.status === 401) {
    //     // console.log(error.response.data.error);
    //     throw new AuthenticationError(error.response.data.error);
    //   }
    //   throw new DefaultError();
    // }
  };
}
const userService = new UserService();
module.exports = userService;
