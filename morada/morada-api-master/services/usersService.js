const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = (email, password) => {
  if (email === "yeison@gmail.co" && password === "123456") {
    return responseOk({ token: "xxxxyyyyzzzzwwwwttttt" });
  }
  return responseError(401, "user unauthorized");
};

const register = () => {
  return responseOk({ "status": "ok" });
};

module.exports = {
    auth,
    register
}
