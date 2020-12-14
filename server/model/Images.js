const mongoose = require("mongoose");

let imagesSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Images", imagesSchema, "images.files");
