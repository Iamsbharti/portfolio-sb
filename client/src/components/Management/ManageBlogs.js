import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import HUE from "@material-ui/core/colors/indigo";
import { AddBoxOutlined, Edit, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import {
  getAllBlogAction,
  updateBlogAction,
  createBlogAction,
  deleteBlogAction,
} from "../../redux/actions/blogAction";
import BlogFormInput from "./BlogFormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const ManageBlogs = ({
  blogs,
  getAllBlogAction,
  updateBlogAction,
  createBlogAction,
  deleteBlogAction,
}) => {
  let history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState({});
  const color = HUE[50];

  useEffect(() => {
    console.log("get all blogs");
    getAllBlogAction();
  }, [getAllBlogAction]);

  //handle dialog transition
  const [value, setValue] = useState(false);
  //open the dialog box
  const handleClick = () => {
    console.log("open dialog box");
    setValue(true);
  };
  //reset the value after dialog is closed
  const handleCloseDialog = (_value) => {
    setValue(_value);
  };
  //handle edit project
  const handleEditBlog = (blogId) => {
    setEditMode(!editMode);
    setValue(!value);
    setBlogToEdit(blogs.find((blog) => blog.blogId === blogId));
  };
  //handle save project
  const handleSaveBlog = (mode, blogInfo) => {
    // based on mode call update or create blog action
    console.log("Saving project ManageBlog", mode, blogInfo);
    if (mode) {
      console.log("edit /update blogs");
      let updateBloginfo = {
        ...blogInfo,
        blogId: blogToEdit.blogId,
      };
      console.log("Blog info for Update::", updateBloginfo);
      updateBlogAction(updateBloginfo);
      setValue(!value);
    } else {
      console.log("create new blog");
      createBlogAction(blogInfo);
      setValue(!value);
    }
  };
  // handle delete project
  const handleDeleteBlog = (blogId) => {
    let blogInfo = {
      blogId: blogId,
      userId: localStorage.getItem("userId"),
    };
    deleteBlogAction(blogInfo);
  };
  return (
    <div className="manage__page">
      <code>Manage Blogs Console</code>
      <ArrowBackIcon
        className="back__icon"
        onClick={() => history.push("/manage")}
      />
      <div className="managae__content">
        <Button onClick={handleClick}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Blog</span>
        </Button>
        {value && (
          <BlogFormInput
            open={value}
            onCloseDialog={handleCloseDialog}
            mode={editMode}
            blogToEdit={blogToEdit}
            saveBlog={handleSaveBlog}
          />
        )}
        <div className="projects">
          <p className="header">Current Blogs</p>
          <List component="ul">
            {blogs &&
              blogs.map((blog, index) => (
                <ListItem key={index}>
                  <ListItemText className="project_name" primary={blog.title} />
                  <IconButton onClick={() => handleEditBlog(blog.blogId)}>
                    <Edit style={{ color: color }} />
                  </IconButton>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleDeleteBlog(blog.blogId)}
                    >
                      <Delete style={{ color: color }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </div>
      </div>
      <ToastContainer autoClose={1599} hideProgressBar />
    </div>
  );
};
const mapStateToProps = (state) => {
  const { blogs } = state;
  return { blogs };
};
const mapActionToProps = {
  getAllBlogAction,
  updateBlogAction,
  createBlogAction,
  deleteBlogAction,
};
export default connect(mapStateToProps, mapActionToProps)(ManageBlogs);
