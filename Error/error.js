class AuthenticationError extends Error {
  static STATUS_CODE = 401;
  name = 'AuthenticationError';

  constructor() {
    super('authenticate');
  }
}
class BadRequestError extends Error {
  static STATUS_CODE = 400;
  name = 'loginError';

  constructor() {
    super('login error');
  }
}
module.exports = AuthenticationError;
module.exports = BadRequestError;
