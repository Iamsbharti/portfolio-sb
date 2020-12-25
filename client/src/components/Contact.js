import React, { useState } from "react";
import "../css/Contact.css";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import CancelScheduleSendIcon from "@material-ui/icons/CancelScheduleSend";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMessage } from "../api/apis";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, isSending] = useState(false);
  const handleSendMessage = async () => {
    isSending(true);
    setError("Sending Message....");

    if (name !== "" && email !== "" && message !== "") {
      let res = await sendMessage(name, email, message);
      if (res) {
        handleClearMessage();
        isSending(false);
      }
    } else {
      isSending(true);
      setError("Name , Email ,Message Required");
    }
  };
  const handleClearMessage = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
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
          <div className="break"></div>
          <div className="email__section">
            <p>Any Type of Query & Discussion.</p>
            <p>- Email</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Saurabhbharti9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Saurabhbharti9@gmail.com</code>
            </a>
          </div>
        </div>

        <div className="message__box">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="you name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <p style={{ marginLeft: "7px" }}>{sending && <code>{error}</code>}</p>
          <div className="message__footer">
            <Button
              variant="text"
              color="primary"
              startIcon={<SendIcon />}
              className="button__message"
              onClick={handleSendMessage}
            >
              Send
            </Button>
            <Button
              variant="text"
              color="secondary"
              size="small"
              className="button__message"
              startIcon={<CancelScheduleSendIcon />}
              onClick={handleClearMessage}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1599} hideProgressBar />
    </>
  );
};
