const router = require("express").Router();
const users = require("../controller/userControl");
const posts = require("../controller/postControl");
const blogs = require("../controller/blogControl");
const auth = require("../middlewares/authorization");
const db = require("../initdb");
const multer = require("multer");
const { storage, fetchPictures, updatePicture } = require("../initdb");
const upload = multer({
  storage: db.storage,
  limits: 1024 * 1024 * 6,
  fileFilter: db.fileFilter,
});

/**projects route */
router.get("/portfolio/projects", posts.getProjects);
// create project
router.post(
  "/portfolio/createProject",
  auth.isAuthorized,
  upload.single("file"),
  posts.createPost
);
// update project
router.post(
  "/portfolio/updateProject/",
  auth.isAuthorized,
  upload.single("file"),
  posts.updateProject
);
// delete project
router.delete(
  "/portfolio/deleteProject/",
  auth.isAuthorized,
  posts.deleteProject
);

/**blogs route */
router.get("/portfolio/blogs", blogs.getBlogs);
//create blog
router.post(
  "/portfolio/createBlog",
  auth.isAuthorized,
  upload.single("file"),
  blogs.createBlog
);
// update blog
router.post(
  "/portfolio/updateBlog/",
  auth.isAuthorized,
  upload.single("file"),
  blogs.updateBlog
);
router.delete("/portfolio/deleteBlog", auth.isAuthorized, blogs.deleteBlog);
/**fetch pictures */
router.get("/project/picture", fetchPictures);
//router.post("/portfolio/createUser", users.createUser);
router.post("/portfolio/login", users.adminLogin);

module.exports = router;
