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
