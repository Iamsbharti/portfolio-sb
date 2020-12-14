const mongoose = require("mongoose");
const Images = require("./Images");
const projectSchema = mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Images",
  },
  type: {
    type: Array,
    required: true,
  },
  techstack: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Project", projectSchema);
