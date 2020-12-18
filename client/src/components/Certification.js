import React from "react";

import "../css/Cert.css";
export const Certification = () => {
  return (
    <>
      <div>
        <div className="cert__section__content">
          <div className="cert__section__left">
            <p className="cert_text">- Certifications</p>
            <a
              href="https://www.youracclaim.com/badges/94d84920-80df-4ca8-864f-5bf4669c74e4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/SecurityPlus Logo Certified CE.png"
                }
                alt="ComptiA Security+"
                className="cert__img__icon"
                title="ComptiA Security+ Certificate"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
