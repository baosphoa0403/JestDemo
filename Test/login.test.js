const userService = require('../User/Service');

describe('login with user', () => {
  const data = {
    user: {
      age: 20,
      userType: 'user',
      _id: '60bc64d1601d170017c32646',
      name: 'khoa',
      email: 'khoa1234@gmail.com',
      productsFavorite: [],
    },
    messager: 'login success',
  };
  try {
    beforeEach(function () {
      console.log('login with account user email vs password');
    });

    test('call api login', async (done) => {
      const user = {
        email: 'khoa1234@gmail.com',
        password: 'khoa123456',
      };
      const response = await userService.login(user);
      console.log(response.data);
      //   expect(response.data).toHaveProperty('user');
      //   expect(response.data).toHaveProperty('token');
      //   expect(response.data).toHaveProperty('messager');
      delete response.data.token;
      expect(data).toStrictEqual(response.data);
      done();
    });

    afterEach(function () {
        console.log('Call api login done');
      });
  } catch (error) {
    console.log(error);
  }
});
