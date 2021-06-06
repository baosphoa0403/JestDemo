const userService = require('../User/Service');
const dataUser = require('../ListUser.json');
const AuthenticationError = require('../Error/error.js');
describe('get list user with admin', () => {
  beforeEach(function () {
    console.log('get list user with admin');
  });

  test('call api get list', async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJjZDNmNDdmYjdjZTAwMTdlYTVjYWQiLCJpYXQiOjE2MjI5ODc4OTUsImV4cCI6MTYyNTY2NjI5NX0.1980Wjp0Yk0fBQAvoBE0l7bGnzuGV1QYZV8FUZtRFM';
      const response = await userService.getAllUser(token);
      // console.log(response.data);
      expect(dataUser).toEqual(expect.objectContaining(response.data));
    } catch (error) {
      expect(error.response.data.error).toEqual(
        expect.stringContaining('Not authorized to access this resource')
      );
    }
  });

  afterEach(function () {
    console.log('Call api get list user done');
  });
});

// {
//     "email" : "admin@gmail.com",
//      "password" : "12345678"
//  }

// {
//   "email" : "khoa1234@gmail.com",
//    "password" : "khoa123456"
// }
