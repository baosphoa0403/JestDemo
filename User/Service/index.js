class UserService {
  login = async (data) => {
    return await axios({
      method: 'Post',
      url: 'https://nike0403.herokuapp.com/users/login',
      data: data,
    });
  };
}
const userService = new UserService();
export default userService;
