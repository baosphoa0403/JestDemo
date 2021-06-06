const userService = require('../User/Service');
const dataUser = require('../ListUser.json');
describe('get list user with admin', () => {
  try {
    beforeEach(function () {
      console.log('get list user with admin');
    });

    test('call api get list', async (done) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJjZDNmNDdmYjdjZTAwMTdlYTVjYWQiLCJpYXQiOjE2MjI5ODc4OTUsImV4cCI6MTYyNTY2NjI5NX0.1980Wjp0Yk0fBQAvoBE0l7bGnzuGV1QYZV8FUZtRFMU';
      const response = await userService.getAllUser(token);
    //   console.log(response.data);
      expect(dataUser).toEqual(expect.objectContaining(response.data));
      done();
    });

    afterEach(function () {
      console.log('Call api get list user done');
    });
  } catch (error) {
    console.log(error);
  }
});

// {
//     "email" : "admin@gmail.com",
//      "password" : "12345678"
//  }
