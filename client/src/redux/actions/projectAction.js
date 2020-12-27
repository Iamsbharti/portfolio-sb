import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "./actionType";

import * as apis from "../../api/apis";

export function getAllProjectAction() {
  console.debug("get all projects actions");
  return async (dispatch) => {
    let allProjectsResponse = await apis.getAllProjects();
    console.debug("all project response in action:", allProjectsResponse);
    dispatch({ type: GET_PROJECTS, allProjectsResponse });
  };
}
export function createProjectAction(projectInfo) {
  console.debug("create project action", projectInfo);
  return async (dispatch) => {
    let newProject = await apis.createProject(projectInfo);
    console.debug("new project action res::", newProject);
    dispatch({ type: CREATE_PROJECT, newProject });
  };
}
export function updateProjectAction(projectInfo) {
  console.debug("Update Project Action", projectInfo);
  return async (dispatch) => {
    let updatedProject = await apis.updateProject(projectInfo);
    console.debug("Updated project:", updatedProject);
    dispatch({ type: UPDATE_PROJECT, updatedProject });
  };
}
export function deleteProjectAction(projectInfo) {
  console.debug("Delete project Action::", projectInfo);
  return async (dispatch) => {
    let projectId = await apis.deleteProject(projectInfo);
    console.debug("Deleted project id::", projectId);
    dispatch({ type: DELETE_PROJECT, projectId });
  };
}
