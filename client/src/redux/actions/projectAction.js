import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "./actionType";

import * as apis from "../../api/apis";

export function getAllProjectAction() {
  console.log("get all projects actions");
  return async (dispatch) => {
    let allProjectsResponse = await apis.getAllProjects();
    console.log("all project response in action:", allProjectsResponse);
    dispatch({ type: GET_PROJECTS, allProjectsResponse });
  };
}
export function createProjectAction(projectInfo) {
  console.log("create project action", projectInfo);
  return async (dispatch) => {
    let newProject = await apis.createProject(projectInfo);
    console.log("new project action res::", newProject);
    dispatch({ type: CREATE_PROJECT, newProject });
  };
}
export function updateProjectAction(projectInfo) {
  console.log("Update Project Action", projectInfo);
  return async (dispatch) => {
    let updatedProject = await apis.updateProject(projectInfo);
    console.log("Updated project:", updatedProject);
    dispatch({ type: UPDATE_PROJECT, updatedProject });
  };
}
export function deleteProjectAction(projectInfo) {
  console.log("Delete project Action::", projectInfo);
  return async (dispatch) => {
    let projectId = await apis.deleteProject(projectInfo);
    console.log("Deleted project id::", projectId);
    dispatch({ type: DELETE_PROJECT, projectId });
  };
}
