import React from "react";

export const Contact = () => {
  return (
    <>
      <p className="cert_text">- Contacts</p>
      <div className="contact__main">
        <div className="social__icons">
          <p>
            <img
              src={process.env.PUBLIC_URL + "/icons8-twitter-48.png"}
              className="icon_img_tech"
              title="Twitter"
              alt="HTML"
            />
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "/icons8-linkedin-48.png"}
              className="icon_img_tech"
              title="linkedIn"
              alt="linkedIn"
            />
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
              className="icon_img_tech"
              title="github"
              alt="github"
            />
          </p>
        </div>
        <div className="message__box">
          <input type="text" name="name" placeholder="you name" />
          <input type="email" name="email" placeholder="you email" />
          <textarea name="message" placeholder="message" />
          <div className="message__footer"></div>
          <button>Send</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
};
