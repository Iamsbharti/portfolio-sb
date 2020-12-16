import React, { useRef, useCallback, useEffect } from "react";
import { sliderIntro, sliderDivIntro, hideIntroDiv } from "./Animation";
import "../css/Slider.css";
export const SliderIntro = () => {
  /**slider intro */
  let sliderText1 = useRef(null);
  let sliderText2 = useRef(null);
  let sliderText3 = useRef(null);

  /**slider */
  let sliderDiv = useRef(null);
  let introDiv = useRef(null);
  useEffect(() => {
    sliderDivIntro(sliderDiv);
    hideIntroDiv(introDiv);
    sliderIntro(sliderText1, sliderText2, sliderText3);
  }, []);
  return (
    <>
      <div
        className="intro"
        ref={(ele) => {
          introDiv = ele;
        }}
      >
        <div className="intro-text">
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText1 = ele;
              }}
            >
              I am Saurabh Bharti
            </span>
          </h1>
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText2 = ele;
              }}
            >
              Implementing
            </span>
          </h1>
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText3 = ele;
              }}
            >
              Ideas.
            </span>
          </h1>
        </div>
      </div>
      <div
        className="slider"
        ref={(ele) => {
          sliderDiv = ele;
        }}
      ></div>
    </>
  );
};
