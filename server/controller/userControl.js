const User = require("../model/User");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { getToken } = require("../library/generateToken");

const createUser = async (req, res) => {
  logger.info("create user control");

  let userSchema = new User({
    firstName: "Saurabh",
    lastName: "Bharti",
    userName: "sb",
    userId: shortid.generate(),
    password: await bcrypt.hash("Saurabh@123", await bcrypt.genSalt(11)),
  });
  logger.info(`schema: ${userSchema}`);
  let userSaved = await User.create(userSchema);
  logger.info(`user created ${userSaved}`);
  return res.status(200).json(userSaved);
};
const adminLogin = async (req, res) => {
  logger.info("Admin Login Control");
  const { userName, password } = req.body;
  /**verify the username */
  let userFound = await User.findOne({ userName: userName });
  if (!userFound) {
    return res
      .status(404)
      .json(formatResponse(true, 404, "User Not Found", null));
  }
  /**authenticate user */
  let passwordMatch = await bcrypt.compare(password, userFound.password);
  logger.info(`pwd match-${passwordMatch}`);

  /**generate token */
  if (userFound && passwordMatch) {
    let userdata = userFound.toObject();
    delete userdata._id;
    delete userdata.__v;
    delete userdata.password;

    await getToken(userdata, (error, token) => {
      if (error) {
        res
          .status(500)
          .json(formatResponse(true, 500, "Internal Server Error", error));
      } else {
        res.header("authToken", token.authToken);
        res.status(200).json(
          formatResponse(false, 200, "User Authenticated", {
            ...userdata,
            ...token,
          })
        );
      }
    });
  } else if (!passwordMatch) {
    res
      .status(400)
      .json(formatResponse(true, 400, "Authentication Failed", null));
  }
};
module.exports = { createUser, adminLogin };
