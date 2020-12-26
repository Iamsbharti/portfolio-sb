import React, { useEffect, useCallback, useRef } from "react";
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
  const certsRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);
  const mainRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollExecutor = (refs) => {
    console.debug("scroll ece:", refs);
    switch (refs) {
      case "certs":
        certsRef.current.scrollIntoView();
        break;
      case "main":
        mainRef.current.scrollIntoView();
        break;
      case "tech":
        techRef.current.scrollIntoView();
        break;
      case "contact":
        contactRef.current.scrollIntoView();
        break;
      case "projects":
        projectsRef.current.scrollIntoView();
        break;
      default:
    }
  };
  /**useEffect(() => {
    scrollExecutor();
  }, []);**/

  /**handle login for  admin*/
  let history = useHistory();
  const loginFunction = useCallback(
    (event) => {
      const lKey = 76;
      console.debug("event-keycode::", event.keyCode);
      let evt = event || window.event; // IE support
      let c = evt.keyCode;
      let ctrlDown = evt.ctrlKey || evt.metaKey; // Mac support
      if (ctrlDown && c === lKey) {
        console.debug("login page");
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
        <SideBar handleScrollBehaviour={scrollExecutor} />
      </div>
      <div className="introduction" ref={mainRef}>
        <Introduction />
      </div>
      <div className="profile">
        <JobProfile />
      </div>
      <div className="projects" ref={projectsRef}>
        <Project />
      </div>
      <div className="certs" ref={certsRef}>
        <Certification />
      </div>
      <div className="techs" ref={techRef}>
        <TechSatck />
      </div>
      <div className="contact67" ref={contactRef}>
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
