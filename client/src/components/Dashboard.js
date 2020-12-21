import React, { useEffect, useCallback } from "react";
import "../css/Dashboard.css";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
import { SliderIntro } from "./SliderIntro";
import { Introduction } from "./Introduction";
import { JobProfile } from "./JobProfile";
import Project from "./Project";
import { Certification } from "./Certification";
import { TechSatck } from "./TechSatck";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
const Dashboard = () => {
  /**handle login for  admin*/
  let history = useHistory();
  const loginFunction = useCallback(
    (event) => {
      const lKey = 76;
      console.log("event-keycode::", event.keyCode);
      let evt = event || window.event; // IE support
      let c = evt.keyCode;
      let ctrlDown = evt.ctrlKey || evt.metaKey; // Mac support
      if (ctrlDown && c === lKey) {
        console.log("login page");
        history.push("/login");
      }
    },
    [history]
  );

  useEffect(() => {
    document.addEventListener("keydown", loginFunction, false);

    return () => {
      document.removeEventListener("keydown", loginFunction, false);
    };
  }, [loginFunction]);
  return (
    <>
      <div className="main">
        <NavBar />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
      <div className="introduction">
        <Introduction />
      </div>
      <div className="profile">
        <JobProfile />
      </div>
      <div className="projects">
        <Project />
      </div>
      <div className="certs">
        <Certification />
      </div>
      <div className="techs">
        <TechSatck />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="foot">
        <Footer />
      </div>
      <SliderIntro />
    </>
  );
};
export default Dashboard;
