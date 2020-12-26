import React from "react";
import "../css/Tech.css";
//import { animateDivOnScrollIntro, animateTechnologyIntro } from "./Animation";

export const TechSatck = () => {
  /**widget div */

  return (
    <>
      <p className="cert_text">- Codersrank Profile</p>
      <div className="techstack">
        <div className="widget__div">
          <codersrank-widget
            username="iamsbharti"
            class="my-widget"
            badges="3"
            style={{ width: "440px", marginRight: "23px" }}
          ></codersrank-widget>
        </div>
      </div>
      <p className="cert_text">- Technologies</p>
      <div className="techstack__icons">
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-html-5-96.png"}
            className="icon_img_tech"
            title="HTML"
            alt="HTML"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-css3-96.png"}
            className="icon_img_tech"
            title="CSS"
            alt="css"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-javascript-96.png"}
            className="icon_img_tech"
            title="JavaScript"
            alt="js"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-typescript-96.png"}
            className="icon_img_tech"
            title="TypeScript"
            alt="ts"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
            className="icon_img_tech"
            title="NodeJs"
            alt="node"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/reactjs.svg"}
            className="icon_img_tech"
            title="ReactJs"
            alt="react"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-angularjs-96.png"}
            className="icon_img_tech"
            title="Angular"
            alt="angular"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
            className="icon_img_tech"
            title="MongoDB"
            alt="mongodb"
          />
        </p>
        <p>
          <img
            src={`${process.env.PUBLIC_URL}/Socket-io.svg`}
            className="icon_img_tech"
            title="Socket.io"
            alt="socketio"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/redux.svg"}
            className="icon_img_tech"
            title="Redux"
            alt="redux"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/webpack.svg"}
            className="icon_img_tech"
            title="Webpack"
            alt="webpack"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-java-144.png"}
            className="icon_img_tech"
            title="java"
            alt="java"
          />
        </p>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/icons8-python-144.png"}
            className="icon_img_tech"
            title="python"
            alt="python"
          />
        </p>
      </div>
    </>
  );
};
