const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
