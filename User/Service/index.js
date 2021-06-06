const axios = require('axios');
const DefaultError = require('../../Error/error.js');
const BadRequestError = require('../../Error/error.js');
const AuthenticationError = require('../../Error/error.js');
class UserService {
  login = async (data) => {
    try {
      return await axios({
        method: 'Post',
        url: 'https://nike0403.herokuapp.com/users/login',
        data: data,
      });
    } catch (error) {
      // console.log(error.response);
      if (error.response.status === BadRequestError.STATUS_CODE) {
        throw new BadRequestError(error.response.data);
      }
      // throw new DefaultError();
    }
  };
  getAllUser = async (token) => {
    try {
      return await axios({
        method: 'Get',
        url: 'https://nike0403.herokuapp.com/users',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      // console.log(error.response.status);
      // console.log(error.response.data.error);
      if (error.response.status === 401) {
        // console.log(error.response.data.error);
        throw new AuthenticationError(error.response.data.error);
      }
      // throw new DefaultError();
    }
  };
}
const userService = new UserService();
module.exports = userService;
