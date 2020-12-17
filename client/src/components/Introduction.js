import React, { useRef, useEffect } from "react";
import "../css/Intro.css";
import {
  nameIntro,
  intro,
  jobTitleIntro,
  jobDetailsIntro,
  nameUlScale,
} from "./Animation";

export const Introduction = () => {
  /**name header */
  let fname = useRef(null);
  let ulDiv = useRef(null);

  /**job details section */
  let intoduction = useRef(null);
  let jobTitle = useRef(null);
  let jobDetails = useRef(null);

  useEffect(() => {
    nameIntro(fname);
    nameUlScale(ulDiv);

    intro(intoduction);
    jobTitleIntro(jobTitle);
    jobDetailsIntro(jobDetails);
  }, []);
  return (
    <>
      <div>
        <div className="header_introduction">
          <div
            className="intro_name"
            ref={(el) => {
              fname = el;
            }}
          >
            <p className="responsive_name">Saurabh Bharti.</p>
            <p className="fname">Saurabh </p>
            <p className="lname">
              Bharti<span>.</span>
            </p>
            <div
              className="intro_name_ul"
              ref={(ele) => {
                ulDiv = ele;
              }}
            ></div>
          </div>
          <div className="intro_details">
            <p
              className="intro_text"
              ref={(ele) => {
                intoduction = ele;
              }}
            >
              - Introduction
            </p>
            <div>
              <p
                className="intro_job_title"
                ref={(ele) => {
                  jobTitle = ele;
                }}
              >
                Consultant and Full Stack Developer ,Based In India
              </p>
            </div>
            <p
              className="intro_job_details"
              ref={(ele) => {
                jobDetails = ele;
              }}
            >
              Security Consultant, building FullStack applications
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
