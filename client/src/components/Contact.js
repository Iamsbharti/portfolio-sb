import React from "react";

export const Contact = () => {
  return (
    <>
      <p className="cert_text">- Contacts</p>
      <div className="contact__main">
        <div className="social__icons">
          <p>
            <a
              href="https://twitter.com/saurabhbharti_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons8-twitter-48.png"}
                className="icon_img_contact"
                title="Twitter"
                alt="HTML"
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/saurabh-bharti-2ba3018a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons8-linkedin-48.png"}
                className="icon_img_contact"
                title="linkedIn"
                alt="linkedIn"
              />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Iamsbharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                className="icon_img_contact"
                title="github"
                alt="github"
              />
            </a>
          </p>
        </div>
        <div className="message__box">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" placeholder="you name" />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" placeholder="you email" />
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea name="message" placeholder="message" />
          <br />
          <div className="button__login">
            <p>Send</p>
          </div>
          <span className="cancel__span">
            <code>Cancel?</code>
          </span>
        </div>
      </div>
    </>
  );
};
