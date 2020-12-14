import { CREATE_BLOG, DELETE_BLOG, GET_BLOGS, UPDATE_BLOG } from "./actionType";

import * as apis from "../../api/apis";

export function getAllBlogAction() {
  console.log("get all blogs actions");
  return async (dispatch) => {
    let allBlogsResponse = await apis.getAllBlogs();
    console.log("all blogs response in action:", allBlogsResponse);
    dispatch({ type: GET_BLOGS, allBlogsResponse });
  };
}
export function createBlogAction(blogInfo) {
  console.log("create blog action", blogInfo);
  return async (dispatch) => {
    let newBlog = await apis.createBlog(blogInfo);
    console.log("new blog action res::", newBlog);
    dispatch({ type: CREATE_BLOG, newBlog });
  };
}
export function updateBlogAction(blogInfo) {
  console.log("Update blog Action", blogInfo);
  return async (dispatch) => {
    let updatedBlog = await apis.updateBlog(blogInfo);
    console.log("Updated blog:", updatedBlog);
    dispatch({ type: UPDATE_BLOG, updatedBlog });
  };
}
export function deleteBlogAction(blogInfo) {
  console.log("Delete blog Action::", blogInfo);
  return async (dispatch) => {
    let blogId = await apis.deleteBlog(blogInfo);
    console.log("Deleted blog id::", blogId);
    dispatch({ type: DELETE_BLOG, blogId });
  };
}
