import React, { useRef, useEffect } from "react";
import "../css/JobProfile.css";
import { jobProfileCardIntro } from "./Animation";
export const JobProfile = () => {
  /**job profile */
  let card_sec = useRef(null);
  let card_stack = useRef(null);
  let card_ml = useRef(null);
  useEffect(() => {
    jobProfileCardIntro(card_sec, card_stack, card_ml);
  });
  return (
    <>
      <div className="job__profile">
        {" "}
        <div className="project__job__profile">
          <div
            className="project__job__profile__card color__sec"
            ref={(ele) => {
              card_sec = ele;
            }}
          >
            <i
              className="fa fa-shield job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Security Consultant</h3>
          </div>
          <div
            className="project__job__profile__card color__fs"
            ref={(ele) => {
              card_stack = ele;
            }}
          >
            <i
              className="fa fa-desktop job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Full Stack Developer</h3>
          </div>
          <div
            className="project__job__profile__card color__ml"
            ref={(ele) => {
              card_ml = ele;
            }}
          >
            <i
              className="fa fa-line-chart job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Machine Learning Enthuiast</h3>
          </div>
        </div>
      </div>
    </>
  );
};
