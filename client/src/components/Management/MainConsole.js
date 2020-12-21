import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
import { connect } from "react-redux";
import { logOutAction } from "../../redux/actions/adminAction";
const MainConsole = ({ user, logOutAction }) => {
  let history = useHistory();
  const [showStatus, setShowStatus] = useState(true);
  const [status, setStatus] = useState("");
  const handleLogout = () => {
    logOutAction();
    setShowStatus(false);
    setStatus("Logging off, see you soon!!!");
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("userName");

    setTimeout(() => {
      history.push("/login");
    }, 2000);
  };
  return (
    <div className="manage__page">
      <h1>Hi, {user.firstName}</h1>
      <code>Management Console</code>
      <code style={{ color: "red", cursor: "pointer" }} onClick={handleLogout}>
        Logout
      </code>
      <p className="status" hidden={showStatus}>
        <code>{status}</code>
      </p>
      <div className="manage__options">
        <div className="content__card">
          <h2>Contents</h2>
          <div className="divider"></div>
          <p onClick={() => history.push("/manage/projects")}>
            Manage Projects
          </p>
          <p onClick={() => history.push("/manage/blogs")}>Manage Blogs</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapActionToProps = { logOutAction };
export default connect(mapStateToProps, mapActionToProps)(MainConsole);
