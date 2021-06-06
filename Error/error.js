// class DefaultError extends Error {
//   static STATUS_CODE = 500; // You can change it, it depends how you use it
//   name = 'DefaultError';

//   constructor() {
//     super('Default error, add what you want');
//   }
// }

class AuthenticationError extends Error {
  static STATUS_CODE = 401;
  name = 'AuthenticationError';

  constructor(data) {
    console.log(data);
    super();
    this.name = data;
  }
}
class BadRequestError extends Error {
  static STATUS_CODE = 400;
  name = 'loginError';

  constructor(data) {
    super();
    this.name = data;
  }
}
// module.exports = DefaultError;
module.exports = AuthenticationError;
module.exports = BadRequestError;
