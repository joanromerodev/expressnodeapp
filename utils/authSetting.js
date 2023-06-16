const dotenv = require("dotenv/config");

const allowedUser = process.env.ALLOWED_USER;
const allowedPass = process.env.ALLOWED_PASS;

const authenticateUser = (user, pass) => {
  if (user === allowedUser && pass === allowedPass) {
    return true;
  }
  return false;
};

module.exports = authenticateUser;
