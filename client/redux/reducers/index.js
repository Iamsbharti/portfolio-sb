import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";
import { blogReducer } from "./blogReducer";
import { combineReducers } from "redux";

export default combineReducers({
  projects: projectReducer,
  user: userReducer,
  blogs: blogReducer,
});
