const Blog = require("../model/Blog");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { deleteFile } = require("../initdb");
const { filterNewItem } = require("./postControl");

const createBlog = async (req, res) => {
  logger.info("Create Blog Control");
  const { userId, title, link, description, type } = req.body;
  const newBlog = new Blog({
    blogId: shortid.generate(),
    userId: req.query.userId,
    title: title,
    link: link,
    description: description,
    image: req.file.id,
  });

  /**create blog */
  let savedBlog = await Blog.create(newBlog);
  const { blogId } = savedBlog;
  // update type
  let updateOptions = {
    $push: {
      type: { $each: type.split(",") },
    },
  };

  console.log("updateoptions:", updateOptions);
  let updatedBlog = await Blog.updateOne({ blogId: blogId }, updateOptions);
  const { n } = updatedBlog;
  let createdBlog = await Blog.findOne({
    blogId: blogId,
  }).populate("image");

  if (createdBlog && n === 1) {
    res
      .status(200)
      .json(formatResponse(false, 200, "Blog Created", createdBlog));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};
const getBlogs = async (req, res) => {
  logger.info("Get All Blog Control");
  Blog.find()
    .populate("image")
    .lean()
    .exec((error, blogs) => {
      if (error) {
        res
          .status(500)
          .json(formatResponse(true, 500, "Internal Server Error", error));
      } else {
        res
          .status(200)
          .json(formatResponse(false, 200, "Blogs Fetched", blogs));
      }
    });
};
const deleteBlog = async (req, res) => {
  logger.info("Delete Blog Control");
  const { blogId } = req.query;
  const query = { blogId: blogId };

  //find blog and delete file image
  let blogFound = await Blog.findOne(query);
  // delete image
  if (blogFound.image !== null) {
    let deleteResponse = deleteFile(blogFound.image);
    logger.info("Project Image Delted");
  }
  // delete the whole project
  Blog.deleteOne({ blogId: req.query.blogId }, (err, deleted) => {
    if (err) {
      res
        .status(500)
        .json(formatResponse(true, 500, "Internal Server Error", err));
    } else {
      let { n } = deleted;
      res
        .status(200)
        .json(formatResponse(false, 200, "Blog Deleted", `${n} doc updated`));
    }
  });
};
const updateBlog = async (req, res) => {
  logger.info("Update Blog control");
  const { title, link, description, type, userId, created } = req.body;
  const { blogId, fileChg } = req.query;
  console.log("BODY::", req.body);
  console.log("QUERY::", req.query);

  let updateOptions = {};
  let existingBlog = await Blog.findOne({
    blogId: blogId,
  });
  // upload new file
  if (fileChg === "true" && existingBlog.image !== null) {
    // delete the existing file
    logger.info(`Delete Existing file-${existingBlog.image}`);
    let deleteResponse = deleteFile(existingBlog.image);
    logger.info(`Delete Response-${deleteResponse}`);
    updateOptions = { ...updateOptions, image: req.file.id };
  } else {
    // delete the file which was uploaded
    /**logger.info(`Delete Uploaded file-${req.file.id}`);
    let deleteResponse = deleteFile(req.file.id);
    logger.info(`Delete Response-${deleteResponse}`);
    **/
  }
  // filter new type array
  let updatedTypeArray = filterNewItem(existingBlog.type, type.split(","));
  let arrayUpdateOptions = {
    ...updateOptions,
    $push: {
      type: { $each: updatedTypeArray },
    },
  };
  updateOptions = {
    ...arrayUpdateOptions,
    title: title,
    link: link,
    description: description,
    userId: userId,
    created: created,
  };
  // update blog
  let { n } = await Blog.updateOne({ blogId: blogId }, updateOptions);
  if (n === 1) {
    let updatedBlog = await Blog.findOne({
      blogId: blogId,
    }).populate("image");
    res
      .status(200)
      .json(formatResponse(false, 200, "Blog Updated", updatedBlog));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
