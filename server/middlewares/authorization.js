const jwt = require("jsonwebtoken");
const { formatResponse } = require("../library/formatResponse");
const logger = require("../library/logger");

const isAuthorized = async (req, res, next) => {
  logger.info("Authorizing user");
  const authToken = req.header("authToken");
  const { userId } = req.query;
  console.log(authToken, userId);
  if (authToken === undefined || authToken === null) {
    return res
      .status(400)
      .json(formatResponse(true, 400, "AuthToken Missing", null));
  }
  let decoded = await jwt.verify(authToken, process.env.TOKEN_SECRET);

  if (decoded) {
    const { data } = decoded;
    if (data.userId !== userId) {
      res
        .status(400)
        .json(formatResponse(true, 400, "User Not AUthorized", null));
    }
  }

  next();
};
module.exports = { isAuthorized };
