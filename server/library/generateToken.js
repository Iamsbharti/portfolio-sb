const jwt = require("jsonwebtoken");
const shortid = require("shortid");
const logger = require("./logger");

const getToken = async (userdata, cb) => {
  try {
    let token = {
      jwtid: shortid.generate(),
      iat: Date.now(),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 48,
      sub: "authToken",
      iss: "portfolio",
      data: userdata,
    };
    let generatedToken = {
      authToken: jwt.sign(token, process.env.TOKEN_SECRET),
    };
    cb(null, generatedToken);
  } catch (error) {
    logger.info(`Error Generating Token ${error.message}`);
    cb(error, null);
  }
};

module.exports = { getToken };
