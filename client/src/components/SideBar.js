import React from "react";
import "../css/SideBar.css";
export const SideBar = () => {
  return (
    <div className="sidebar__main">
      <p>
        <img src={process.env.PUBLIC_URL + "/shuttle.png"} alt="" />
      </p>
      <p>
        <img src={process.env.PUBLIC_URL + "/icons8-blogger-256.png"} alt="" />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-certificate-64.png"}
          alt=""
        />
      </p>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/icons8-stack-correctly-96.png"}
          alt=""
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
