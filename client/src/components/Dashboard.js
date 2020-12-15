import React from "react";
import "../css/Dashboard.css";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
const Dashboard = () => {
  return (
    <>
      <div className="main">
        <NavBar />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
    </>
  );
};
export default Dashboard;
