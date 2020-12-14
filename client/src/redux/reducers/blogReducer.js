import {
  CREATE_BLOG,
  DELETE_BLOG,
  GET_BLOGS,
  UPDATE_BLOG,
} from "../actions/actionType";
import { blogs } from "../defaultStore";
export function blogReducer(_blogs = blogs, action) {
  switch (action.type) {
    case GET_BLOGS:
      return action.allBlogsResponse;
    case CREATE_BLOG:
      return [..._blogs, action.newBlog];
    case UPDATE_BLOG:
      const { blogId } = action.updatedBlog;
      return _blogs.map((blog) =>
        blog.blogId === blogId ? { ...blog, ...action.updatedBlog } : blog
      );
    case DELETE_BLOG:
      return _blogs.filter((blog) => blog.blogId !== action.blogId);
    default:
      return _blogs;
  }
}
