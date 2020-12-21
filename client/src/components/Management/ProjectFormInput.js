import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Button,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Delete } from "@material-ui/icons";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { connect } from "react-redux";
import { techStackArray, projectTypeArray } from "../../redux/defaultStore";
import ChipComponent from "./ChipComponent";
import Divider from "@material-ui/core/Divider";
import { baseUrl } from "../../api/apis";
import "../../css/Management.css";
const styles = makeStyles((theme) => ({
  FormControl: {
    width: 600,
    margin: 20,
  },
}));
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProjectFormInput = ({
  open,
  onCloseDialog,
  mode,
  projectToEdit,
  saveProject,
}) => {
  const diaLogClasses = useStyles();
  const formClasses = styles();
  const [openValue, setOpenValue] = useState(open);
  console.log("PROJECT EDIT", projectToEdit);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  const [name, setName] = useState(mode ? projectToEdit.name : "");
  const [description, setDesc] = useState(
    mode ? projectToEdit.description : ""
  );
  const [type, setType] = useState(
    mode ? projectToEdit.type : projectTypeArray
  );
  const [techstack, setTechStack] = useState(
    mode ? projectToEdit.techstack : techStackArray
  );
  const [demo, setDemo] = useState(mode ? projectToEdit.demo : "");
  const [code, setCode] = useState(mode ? projectToEdit.code : "");
  const [file, setFile] = useState();
  const handleProject = () => {
    console.log("Save project FormINput");
    let projectInfo = {
      name: name,
      description: description,
      type: type,
      techstack: techstack,
      demo: demo,
      code: code,
      userId: localStorage.getItem("userId"),
    };
    if (file) {
      projectInfo = { ...projectInfo, fileChg: "true", file: file };
    }
    saveProject(mode, projectInfo);
  };
  // handle delete chip component
  const handleUpdateChipComponent = (updatedChips, type) => {
    console.log("handle update chip Form Input::", updatedChips, type);
    switch (type) {
      case "Techstack":
        setTechStack(updatedChips);
        console.log("updated tech stack array::", techstack);
        break;
      case "ProjectType":
        setType(updatedChips);
        break;
      default:
    }
  };
  return (
    <>
      <Dialog
        fullScreen
        open={openValue}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={diaLogClasses.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={diaLogClasses.title}>
              {mode} Project
            </Typography>
            <Button autoFocus color="inherit" onClick={handleProject}>
              {mode ? "Save" : "Create"}
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Create a new Project</DialogTitle>
        <DialogContent>
          <div className="input__form">
            <p>Edit/Add Project</p>
            <div className="form__card">
              <div className="form__content__left">
                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="name"
                  label="Project Name"
                  margin="dense"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="description"
                  label="Description"
                  margin="dense"
                  value={description}
                  rowsMax={4}
                  onChange={(e) => setDesc(e.target.value)}
                />

                <div className="upload_cover">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <p>Upload Picture</p>
                    <CloudUploadIcon title="Upload Attachment" />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    name="attachment"
                    onChange={(event) => setFile(event.target.files[0])}
                  />
                  <span
                    className="upload__message"
                    hidden={file ? false : true}
                  >
                    Upload Success
                    <IconButton edge="end" onClick={() => setFile()}>
                      <Delete />
                    </IconButton>
                  </span>
                  <div
                    className="img__div"
                    hidden={projectToEdit.image ? false : true}
                  >
                    {projectToEdit.image && (
                      <img
                        src={`${baseUrl}/api/v1/project/picture?filename=${projectToEdit.image.filename}`}
                        alt="demon"
                      />
                    )}
                  </div>
                </div>
                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="code"
                  placeholder="Code Repo link"
                  label="Project Code Repo Link"
                  margin="dense"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="form__content__right">
                <div className="techstack__chips">
                  <ChipComponent
                    chips={techstack}
                    type="Techstack"
                    updateChipContent={handleUpdateChipComponent}
                  />
                </div>
                <Divider />
                <div className="type__chips">
                  <ChipComponent
                    chips={type}
                    type="ProjectType"
                    updateChipContent={handleUpdateChipComponent}
                  />
                </div>
                <Divider />
                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="demo"
                  placeholder="demo link"
                  label="Project Demo Link"
                  margin="dense"
                  value={demo}
                  onChange={(e) => setDemo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
const mapActionToProps = {};
export default connect(mapStateToProps, mapActionToProps)(ProjectFormInput);
