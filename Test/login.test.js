const userService = require('../User/Service');
const BadRequestError = require('../Error/error.js');
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
    // setup

    // testing
    test('call api login', async () => {
      const user = {
        email: 'khoa1234@gmail.com',
        password: 'khoa12345',
      };
      try {
        const response = await userService.login(user);
        console.log(response.data);
        //   expect(response.data).toHaveProperty('user');
        //   expect(response.data).toHaveProperty('token');
        //   expect(response.data).toHaveProperty('messager');
        delete response.data.token;
        expect(data).toStrictEqual(response.data);
      } catch (error) {
        // console.log({...error});
        // console.log(error.response.status);
        // console.log(error.response.data);
        // expect(error.response.status).toBe(400);
        // console.log(BadRequestError.STATUS_CODE);
        // expect(error.response.status).toBe(BadRequestError.STATUS_CODE);
        expect(error.response.data).toEqual(
          expect.stringContaining('Unable to login')
        );
      }
    });
    //done
    afterEach(function () {
      console.log('Call api login done');
    });
  } catch (error) {
    console.log(error);
  }
});
