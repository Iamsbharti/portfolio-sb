import React, { useEffect, useRef } from "react";
import "../css/SideBar.css";
import { sideBarIntro } from "./Animation";

export const SideBar = () => {
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
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-blogger-256.png"}
          alt=""
          title="blogs"
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-certificate-64.png"}
          alt=""
          title="certifications"
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-stack-correctly-96.png"}
          alt=""
          title="contact me"
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-contact-details-96.png"}
          alt=""
        />
      </p>
    </div>
  );
};
