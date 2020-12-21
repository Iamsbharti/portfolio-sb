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
  getAllProjectAction,
  createProjectAction,
  updateProjectAction,
  deleteProjectAction,
} from "../../redux/actions/projectAction";
import ProjectFormInput from "./ProjectFormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const ManageProjects = ({
  projects,
  getAllProjectAction,
  createProjectAction,
  updateProjectAction,
  deleteProjectAction,
}) => {
  let history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState({});
  const color = HUE[50];

  useEffect(() => {
    console.log("get all projects");
    getAllProjectAction();
  }, [getAllProjectAction]);

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
  const handleEditProject = (projectId) => {
    setEditMode(!editMode);
    setValue(!value);
    setProjectToEdit(
      projects.find((project) => project.projectId === projectId)
    );
  };
  //handle save project
  const handleSaveProject = (mode, projectInfo) => {
    // based on mode call update or create project action
    console.log("Saving project ManageProject", mode, projectInfo);
    if (mode) {
      console.log("edit /update project");
      let updateProjectinfo = {
        ...projectInfo,
        projectId: projectToEdit.projectId,
      };
      console.log("Project info for Update::", updateProjectinfo);
      updateProjectAction(updateProjectinfo);
      setValue(!value);
    } else {
      console.log("create new project");
      createProjectAction(projectInfo);
      setValue(!value);
    }
  };
  // handle delete project
  const handleDeleteProject = (projectId) => {
    let projectInfo = {
      projectId: projectId,
      userId: localStorage.getItem("userId"),
    };
    deleteProjectAction(projectInfo);
  };
  return (
    <div className="manage__page">
      <code>Manage Projects Console</code>
      <ArrowBackIcon
        className="back__icon"
        onClick={() => history.push("/manage")}
      />
      <div className="managae__content">
        <Button onClick={handleClick}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Project</span>
        </Button>
        {value && (
          <ProjectFormInput
            open={value}
            onCloseDialog={handleCloseDialog}
            mode={editMode}
            projectToEdit={projectToEdit}
            saveProject={handleSaveProject}
          />
        )}
        <div className="projects">
          <p className="header">Current Projects</p>
          <List component="ul">
            {projects &&
              projects.map((project, index) => (
                <ListItem key={index}>
                  <ListItemText
                    className="project_name"
                    primary={project.name}
                  />
                  <IconButton
                    onClick={() => handleEditProject(project.projectId)}
                  >
                    <Edit style={{ color: color }} />
                  </IconButton>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleDeleteProject(project.projectId)}
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
  const { projects } = state;
  return { projects };
};
const mapActionToProps = {
  getAllProjectAction,
  createProjectAction,
  updateProjectAction,
  deleteProjectAction,
};
export default connect(mapStateToProps, mapActionToProps)(ManageProjects);
