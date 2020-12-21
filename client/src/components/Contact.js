import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="contact__main">
        <div className="social__icons"></div>
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
