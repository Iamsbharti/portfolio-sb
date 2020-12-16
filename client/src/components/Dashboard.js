import React from "react";
import "../css/Dashboard.css";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
import { SliderIntro } from "./SliderIntro";
const Dashboard = () => {
  return (
    <>
      <div className="main">
        <NavBar />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
      <SliderIntro />
    </>
  );
};
export default Dashboard;
