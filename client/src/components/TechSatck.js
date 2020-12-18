import React, { useEffect, useRef } from "react";
import "../css/Tech.css";
//import { animateDivOnScrollIntro, animateTechnologyIntro } from "./Animation";

export const TechSatck = () => {
  /**widget div */
  let widgetRef = useRef(null);

  let iconsRef = useRef(null);

  return (
    <>
      <p className="cert_text">- Codersrank Profile</p>
      <div className="techstack">
        <div
          className="widget__div"
          ref={(ele) => {
            widgetRef = ele;
          }}
        >
          <codersrank-widget
            username="iamsbharti"
            class="my-widget"
            badges="3"
            style={{ width: "440px", marginRight: "23px" }}
          ></codersrank-widget>
        </div>
      </div>
    </>
  );
};
