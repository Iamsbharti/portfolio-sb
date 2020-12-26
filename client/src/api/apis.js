import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";
export const baseUrl = "http://localhost:4200";

export const getAllProjects = async () => {
  console.debug("calling api");
  try {
    let allProjects = await axios.get(`${baseUrl}/api/v1/portfolio/projects`);
    console.debug("GET all projects response", allProjects);
    return allProjects.data.data;
  } catch (error) {
    console.warn("Error Fetching Projects");
  }
};

export const loginApi = async ({ loginId, password }) => {
  console.debug("Login api call");
  try {
    let loginRes = await axios.post(`${baseUrl}/api/v1/portfolio/login`, {
      userName: loginId,
      password: password,
    });

    let {
      firstName,
      lastName,
      userName,
      userId,
      authToken,
    } = loginRes.data.data;
    /**local storage */
    localStorage.setItem("userId", userId);
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("name", firstName + " " + lastName);
    localStorage.setItem("userName", userName);

    let returnVal = loginRes.data.data;
    delete returnVal.authToken;
    returnVal = {
      ...returnVal,
      error: loginRes.data.error,
      message: loginRes.data.message,
    };
    return returnVal;
  } catch (error) {
    console.warn("Error", error.message);
    return error.response.data;
  }
};
export const createProject = async (projectInfo) => {
  console.debug("Create Project api::", projectInfo);
  let data = new FormData();
  const {
    name,
    description,
    type,
    techstack,
    demo,
    code,
    file,
    userId,
  } = projectInfo;
  data.append("userId", userId);
  data.append("name", name);
  data.append("description", description);
  data.append("type", type);
  data.append("techstack", techstack);
  data.append("demo", demo);
  data.append("code", code);
  data.append("file", file);
  console.debug("Auth token::", localStorage.getItem("authToken"));

  let createProjectConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/createProject?userId=${userId}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let createProjectResponse = await axios(createProjectConfig);
    console.debug(
      "create project success::",
      createProjectResponse.data.message
    );
    if (
      !createProjectResponse.data.error !== undefined &&
      !createProjectResponse.data.error
    ) {
      toast.success(createProjectResponse.data.message);
      return createProjectResponse.data.data;
    } else {
      toast.error(createProjectResponse.data.message);
      return {};
    }
  } catch (error) {
    console.warn("Create Project Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const updateProject = async (projectInfo) => {
  console.debug("update Project api::", projectInfo);
  let data = new FormData();
  const {
    name,
    description,
    type,
    techstack,
    demo,
    code,
    file,
    fileChg,
    userId,
    projectId,
  } = projectInfo;
  data.append("userId", userId);
  data.append("name", name);
  data.append("description", description);
  data.append("type", type);
  data.append("techstack", techstack);
  data.append("demo", demo);
  data.append("code", code);
  data.append("file", file);

  console.debug("Auth token::", localStorage.getItem("authToken"));
  let updateProjectConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/updateProject?userId=${userId}&projectId=${projectId}&fileChg=${fileChg}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let updateProjectResponse = await axios(updateProjectConfig);
    console.debug(
      "update project success::",
      updateProjectResponse.data.message
    );
    if (
      !updateProjectResponse.data.error !== undefined &&
      !updateProjectResponse.data.error
    ) {
      toast.success(updateProjectResponse.data.message);
      return updateProjectResponse.data.data;
    } else {
      toast.error(updateProjectResponse.data.message);
      return {};
    }
  } catch (error) {
    console.warn("Update Project Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const deleteProject = async (projectInfo) => {
  console.debug("delete Project api", projectInfo);
  const { projectId, userId } = projectInfo;
  let deleteProjectConfig = {
    method: "delete",
    url: `${baseUrl}/api/v1/portfolio/deleteProject?userId=${userId}&projectId=${projectId}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
  };

  try {
    let deleteProjectResponse = await axios(deleteProjectConfig);
    console.debug(
      "delete project success::",
      deleteProjectResponse.data.message
    );
    if (!deleteProjectResponse.data.error) {
      toast.success(deleteProjectResponse.data.message);
    }
    return projectId;
  } catch (error) {
    console.warn("Delete Project Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
/*****************BLOG APIS******************** */
export const getAllBlogs = async () => {
  console.debug("calling api");
  try {
    let allBlogs = await axios.get(`${baseUrl}/api/v1/portfolio/blogs`);
    console.debug("GET all blogs response", allBlogs);
    return allBlogs.data.data;
  } catch (error) {
    console.warn("Error Fetching allBlogs");
  }
};
export const createBlog = async (blogInfo) => {
  console.debug("Create blog api::", blogInfo);
  let data = new FormData();
  const { title, description, type, link, created, file, userId } = blogInfo;
  data.append("userId", userId);
  data.append("title", title);
  data.append("description", description);
  data.append("type", type);
  data.append("link", link);
  data.append("created", created);
  data.append("file", file);
  console.debug("Auth token::", localStorage.getItem("authToken"));

  let createBlogConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/createBlog?userId=${userId}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let createBlogResponse = await axios(createBlogConfig);

    console.debug("create blog success::", createBlogResponse.data.message);
    console.debug("condn check::", createBlogResponse.data.error);
    if (
      createBlogResponse.data.error !== undefined &&
      !createBlogResponse.data.error
    ) {
      console.debug("success condn");
      toast.success(createBlogResponse.data.message);
      return createBlogResponse.data.data;
    } else {
      console.debug("error");
      toast.error(createBlogResponse.data.message);
      return {};
    }
  } catch (error) {
    console.warn("Create Blog Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const updateBlog = async (blogInfo) => {
  console.debug("update Blog api::", blogInfo);
  let data = new FormData();
  const {
    title,
    description,
    type,
    link,
    created,
    file,
    userId,
    fileChg,
    blogId,
  } = blogInfo;
  data.append("userId", userId);
  data.append("title", title);
  data.append("description", description);
  data.append("type", type);
  data.append("link", link);
  data.append("created", created);
  data.append("file", file);

  console.debug("Auth token::", localStorage.getItem("authToken"));
  let updateBlogConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/updateBlog?userId=${userId}&blogId=${blogId}&fileChg=${fileChg}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let updateBlogResponse = await axios(updateBlogConfig);
    console.debug("update blog success::", updateBlogResponse.data.message);
    if (
      updateBlogResponse.data.error !== undefined &&
      !updateBlogResponse.data.error
    ) {
      toast.success(updateBlogResponse.data.message);
      return updateBlogResponse.data.data;
    } else {
      toast.error(updateBlogResponse.data.message);
      return {};
    }
  } catch (error) {
    console.warn("Update Blog Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const deleteBlog = async (blogInfo) => {
  console.debug("delete Project api", blogInfo);
  const { blogId, userId } = blogInfo;
  let deleteBlogConfig = {
    method: "delete",
    url: `${baseUrl}/api/v1/portfolio/deleteBlog?userId=${userId}&projectId=${blogId}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
  };

  try {
    let deleteBlogResponse = await axios(deleteBlogConfig);
    console.debug("delete blog success::", deleteBlogResponse.data.message);
    if (!deleteBlogResponse.data.error) {
      toast.success(deleteBlogResponse.data.message);
    }
    return blogId;
  } catch (error) {
    console.warn("Delete blog Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const sendMessage = async (name, email, message) => {
  console.debug("calling api send message");
  try {
    let res = await axios.post(
      `${baseUrl}/api/v1/portfolio/message?name=${name}&email=${email}&message=${message}`
    );
    console.debug("send message response", res);
    if (!res.data.error) {
      toast.success(res.data.message);
      return true;
    }
  } catch (error) {
    console.warn("Error sending  message");
    toast.error(error.response.data.message);
    return false;
  }
};
