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
import { projectTypeArray } from "../../redux/defaultStore";
import ChipComponent from "./ChipComponent";
import { dateFormat } from "./formatDate";
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
const BlogFormInput = ({ open, onCloseDialog, mode, blogToEdit, saveBlog }) => {
  const diaLogClasses = useStyles();
  const formClasses = styles();
  const [openValue, setOpenValue] = useState(open);
  console.debug("Blog EDIT", blogToEdit);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  const [title, setTitle] = useState(mode ? blogToEdit.title : "");
  const [description, setDesc] = useState(mode ? blogToEdit.description : "");
  const [type, setType] = useState(mode ? blogToEdit.type : projectTypeArray);
  const [link, setLink] = useState(mode ? blogToEdit.link : "");
  const [created, setCreated] = useState(mode ? blogToEdit.created : "");
  const [file, setFile] = useState();
  const handleBlog = () => {
    console.debug("Save Blog FormInput");
    let blogInfo = {
      title: title,
      link: link,
      description: description,
      type: type,
      created: created,
      userId: localStorage.getItem("userId"),
    };
    if (file) {
      blogInfo = { ...blogInfo, fileChg: "true", file: file };
    }
    saveBlog(mode, blogInfo);
  };
  // handle delete chip component
  const handleUpdateChipComponent = (updatedChips, type) => {
    console.debug("handle update chip Form Input::", updatedChips, type);
    setType(updatedChips);
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
              {mode} Blog
            </Typography>
            <Button autoFocus color="inherit" onClick={handleBlog}>
              {mode ? "Save" : "Create"}
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Create a new Blog</DialogTitle>
        <DialogContent>
          <div className="input__form">
            <p>Edit/Add Blog</p>
            <div className="form__card">
              <div className="form__content__left">
                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="title"
                  label="Blog Title"
                  margin="dense"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                    hidden={blogToEdit.image ? false : true}
                  >
                    {blogToEdit.image && (
                      <img
                        src={`${baseUrl}/api/v1/project/picture?filename=${blogToEdit.image.filename}`}
                        alt="demon"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="form__content__right">
                <div className="type__chips">
                  <ChipComponent
                    chips={type}
                    type="BlogType"
                    updateChipContent={handleUpdateChipComponent}
                  />
                </div>

                <TextField
                  id="date-local"
                  label="Blog Creation Date"
                  type="date"
                  format="yyyy-MM-dd"
                  className={formClasses.FormControl}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateFormat(created, "yyyy-dd-MM")}
                  onChange={(event) => setCreated(event.target.value)}
                />
                <TextField
                  className={formClasses.FormControl}
                  autoFocus
                  name="link"
                  label="Link"
                  margin="dense"
                  value={link}
                  rowsMax={4}
                  onChange={(e) => setLink(e.target.value)}
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
export default connect(mapStateToProps, mapActionToProps)(BlogFormInput);
