import React, { useEffect, useRef } from "react";
import "../css/SideBar.css";
import { sideBarIntro } from "./Animation";
import { useHistory } from "react-router-dom";
export const SideBar = ({ handleScrollBehaviour }) => {
  let history = useHistory();
  let sideBarEle = useRef(null);
  useEffect(() => {
    sideBarIntro(sideBarEle);
  });

  return (
    <div
      className="sidebar__main"
      ref={(el) => {
        sideBarEle = el;
      }}
    >
      <p>
        <img
          src={process.env.PUBLIC_URL + "/shuttle.png"}
          alt=""
          title="projects"
          onClick={() => handleScrollBehaviour("projects")}
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-blogger-256.png"}
          alt=""
          title="blogs"
          onClick={() => handleScrollBehaviour("blogs")}
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-certificate-64.png"}
          alt=""
          title="certifications"
          onClick={() => handleScrollBehaviour("certs")}
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-stack-correctly-96.png"}
          alt=""
          title="tech stack"
          onClick={() => handleScrollBehaviour("tech")}
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-contact-details-96.png"}
          alt=""
          title="contact me"
          onClick={() => handleScrollBehaviour("contact")}
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-squared-menu-96.png"}
          alt=""
          title="main content"
          onClick={() => handleScrollBehaviour("main")}
        />
      </p>
    </div>
  );
};
