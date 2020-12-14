const Project = require("../model/Project");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { deleteFile } = require("../initdb");

const createPost = async (req, res) => {
  const { name, demo, code, type, description, userId, techstack } = req.body;
  logger.info("Create Post Control");
  console.log(type, techstack);
  let newProject = new Project({
    projectId: shortid.generate(),
    name: name,
    demo: demo,
    code: code,
    description: description,
    userId: userId,
    image: req.file.id,
  });
  /**save new project */

  let savedProject = await Project.create(newProject);
  const { projectId } = savedProject;
  // update type and techstack array
  let updateOptions = {
    $push: {
      techstack: { $each: techstack.split(",") },
      type: { $each: type.split(",") },
    },
  };

  console.log("updateoptions:", updateOptions);
  let updatedProject = await Project.updateOne(
    { projectId: projectId },
    updateOptions
  );
  const { n } = updatedProject;
  let createdProject = await Project.findOne({
    projectId: projectId,
  }).populate("image");

  if (savedProject && n === 1) {
    res
      .status(200)
      .json(formatResponse(false, 200, "Project Created", createdProject));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};
const getProjects = async (req, res) => {
  logger.info("Get Project Control");
  Project.find()
    .populate("image")
    .lean()
    .exec((error, allBlogs) => {
      if (error) {
        res
          .status(500)
          .json(formatResponse(true, 500, "Internal Server Error", error));
      } else {
        res.status(200).json(formatResponse(false, 200, "All Blogs", allBlogs));
      }
    });
};
const filterNewItem = (existingArray, newArray) => {
  console.log("Filter new item::", existingArray, newArray);
  let retVal = [];
  newArray.map((content) => {
    if (!existingArray.includes(content)) {
      console.log(content, "is new item");
      retVal.push(content);
    }
  });
  console.log("new items array::", retVal);
  return retVal;
};
const updateProject = async (req, res) => {
  logger.info("Update project control");
  const { name, demo, code, type, description, userId, techstack } = req.body;
  const { projectId, fileChg } = req.query;
  console.log("BODY::", req.body);
  console.log("QUERY::", req.query);

  let updateOptions = {};
  let existingProject = await Project.findOne({
    projectId: projectId,
  });
  // upload new file
  if (fileChg === "true") {
    // delete the existing file
    logger.info(`Delete Existing file-${existingProject.image}`);
    let deleteResponse = deleteFile(existingProject.image);
    logger.info(`Delete Response-${deleteResponse}`);
    updateOptions = { ...updateOptions, image: req.file.id };
  } else {
    // delete the file which was uploaded
    /**logger.info(`Delete Uploaded file-${req.file.id}`);
    let deleteResponse = deleteFile(req.file.id);
    logger.info(`Delete Response-${deleteResponse}`);
    **/
  }
  // filter new techstack array and type array
  let updatedTechArray = filterNewItem(
    existingProject.techstack,
    techstack.split(",")
  );
  let updatedTypeArray = filterNewItem(existingProject.type, type.split(","));
  let arrayUpdateOptions = {
    ...updateOptions,
    $push: {
      techstack: { $each: updatedTechArray },
      type: { $each: updatedTypeArray },
    },
  };
  updateOptions = {
    ...arrayUpdateOptions,
    name: name,
    demo: demo,
    code: code,
    description: description,
    userId: userId,
  };
  // update project
  let { n } = await Project.updateOne({ projectId: projectId }, updateOptions);
  if (n === 1) {
    let updatedProject = await Project.findOne({
      projectId: projectId,
    }).populate("image");
    res
      .status(200)
      .json(formatResponse(false, 200, "Project Updated", updatedProject));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};
const deleteProject = async (req, res) => {
  logger.info("Delete Project Control");
  const { projectId } = req.query;
  const query = { projectId: projectId };
  //find project and delete file image
  let projectFound = await Project.findOne(query);
  // delete image
  if (projectFound.image !== null) {
    let deleteResponse = deleteFile(projectFound.image);
    logger.info("Project Image Delted");
  }
  // delete the whole project
  await Project.deleteOne(query, (err, project) => {
    let { n } = project;
    if (err) {
      res
        .status(500)
        .json(formatResponse(true, 500, "Internal Server Error", err));
    } else {
      res
        .status(200)
        .json(
          formatResponse(
            false,
            200,
            "Project Deleted",
            `${n} Document Affected`
          )
        );
    }
  });
};
module.exports = {
  createPost,
  getProjects,
  updateProject,
  deleteProject,
  filterNewItem,
};
