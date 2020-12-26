import React, { useState, useEffect } from "react";
import "../css/Project.css";
import { projectFilterCategory } from "../redux/defaultStore";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { getAllProjectAction } from "../redux/actions/projectAction";
import { baseUrl } from "../api/apis";
const Projects = ({ projects, getAllProjectAction }) => {
  const [showCategory, setShowCategory] = useState("All");
  const [stateProjects, setStateProjects] = useState(projects);
  const [filterCategory, setFilterCategory] = useState(projectFilterCategory);
  const [notFound, setNotFound] = useState(true);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
    root1: {
      display: "flex",
      margin: "2px 0px 0px 0px",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.1),
      },
    },
  }));
  const classes = useStyles();
  const handleExpandIcon = (projectId) => {
    //console.debug("handle expand", projectId);
    // change global state
    // eslint-disable-next-line
    setStateProjects(
      stateProjects.map((project) =>
        project.projectId === projectId
          ? { ...project, showDescription: !project.showDescription }
          : project
      )
    );
  };
  useEffect(() => {
    getAllProjectAction();
    setStateProjects(projects);
    setNotFound(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setStateProjects(projects);
    setNotFound(true);
    // eslint-disable-next-line
  }, [projects]);
  useEffect(() => {
    setStateProjects(stateProjects);
    // eslint-disable-next-line
  }, [filterCategory, stateProjects]);

  /**Filter projects */
  const handleFilterProjects = (filter) => {
    //console.debug("Filter projects", filter);
    // set view category
    setShowCategory(filter);

    // set icon as disabled
    setFilterCategory(
      filterCategory.map((category) =>
        category.name === filter
          ? { ...category, disabled: true }
          : { ...category, disabled: false }
      )
    );

    // sort project based on filter
    let sortedProjects =
      filter === "All"
        ? projects
        : projects.filter(
            (project) =>
              project.techstack.includes(filter.toLowerCase()) ||
              project.type.includes(filter.toLowerCase())
          );
    // show/hide project not found div
    setNotFound(sortedProjects.length === 0 ? false : true);

    // set global state
    setStateProjects(sortedProjects);
  };
  return (
    <>
      <div className="project__page">
        <div className="project__page__filters">
          <div className={classes.root}>
            {filterCategory.map((filter, index) => (
              <Chip
                color="secondary"
                label={filter.name}
                key={index}
                avatar={
                  <Avatar
                    alt="Natacha"
                    src={process.env.PUBLIC_URL + `/${filter.img}`}
                  />
                }
                clickable
                variant="outlined"
                disabled={filter.disabled}
                onClick={() => handleFilterProjects(filter.name)}
              />
            ))}
          </div>
        </div>
        <div className="project__page__intro">
          Currently showing{" "}
          <code style={{ color: "#087CA7" }}>{showCategory}</code> Projects
        </div>
        <div className="project__page__cards__section">
          {stateProjects.map((project, index) => (
            <div className="project__card" key={index}>
              <p className="project__card__name">{project.name}</p>
              <div className="project__image">
                {project.image && (
                  <img
                    src={`${baseUrl}/api/v1/project/picture?filename=${project.image.filename}`}
                    alt="demon"
                    className="project__image"
                  />
                )}
              </div>
              <code>- Built Tools</code>
              <div className="project__card__techstack">
                <div className="project__tech">
                  {project.newTechArray.map((tech, index) => (
                    <p key={index}>
                      <img
                        src={process.env.PUBLIC_URL + tech.img}
                        className="icon_img"
                        alt={tech.name}
                        title={tech.name}
                      />
                    </p>
                  ))}
                </div>

                <div className="project__golive">
                  <p>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                        className="icon_img"
                        alt="github"
                        title="SourceCode"
                      />
                    </a>
                  </p>
                  <p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/shuttle.png"}
                        className="icon_img_shuttle"
                        alt="live"
                        title="Live"
                      />
                    </a>
                  </p>
                  <p
                    className="expand__icon"
                    hidden={!project.showDescription}
                    title="See More!!"
                  >
                    <ExpandMoreOutlinedIcon
                      fontSize="large"
                      onClick={() => handleExpandIcon(project.projectId)}
                    />
                  </p>
                  <p
                    className="collapse__icon"
                    hidden={project.showDescription}
                    title="Hide"
                  >
                    <ExpandLessOutlinedIcon
                      fontSize="large"
                      onClick={() => handleExpandIcon(project.projectId)}
                    />
                  </p>
                </div>
              </div>
              <div
                className="project__description"
                hidden={project.showDescription}
              >
                <p className="description">{project.description}</p>
                <div className={classes.root1}>
                  {project.type.map((tp, index) => (
                    <Chip color="primary" label={tp} key={index} size="small" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div hidden={notFound}>
        <div className="project__not__found" hidden={notFound}>
          <img
            src={process.env.PUBLIC_URL + "icons8-brick-wall-64.png"}
            alt="build"
          />
          <p>I am still building them...</p>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { projects } = state;
  // update state
  let _projects = [];
  projects.map((project) => {
    let techArray = project.techstack;
    let newTechArray = [];
    projectFilterCategory.map((icon) =>
      techArray.map((tech) => {
        if (tech.toLowerCase() === icon.name.toLowerCase()) {
          newTechArray.push({ name: tech, img: icon.img });
        }
        return (project = { ...project, newTechArray, showDescription: true });
      })
    );
    return _projects.push(project);
  });

  //console.debug("updated project:", _projects);

  return { projects: _projects };
};
const mapActionToProps = {
  getAllProjectAction,
};
export default connect(mapStateToProps, mapActionToProps)(Projects);
