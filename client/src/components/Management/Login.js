import React, { useState, useEffect } from "react";
import "../../css/Login.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  adminLoginAction,
  setUserStateOnError,
} from "../../redux/actions/adminAction";
const Login = ({ error, message, adminLoginAction }) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "loginId":
        setLoginId(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
    }
  };
  const handleLogin = () => {
    let userInfo = { loginId: loginId, password: password };
    setAuthStatus("Authenticating...");
    adminLoginAction(userInfo);
    setAuthStatus(message);
  };
  useEffect(() => {
    setAuthStatus(message);

    if (error) {
      setUserStateOnError();
      setLoginId("");
      setPassword("");
      setAuthStatus("Try Again!!");
    }
    if (!error && message === "User Authenticated") {
      setTimeout(() => history.push("/manage"), 1200);
    }
  }, [message, error, history]);
  const handleLoginByEnter = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <div className="login__page">
      <div className="login__content">
        <form className="login__form" onKeyDown={handleLoginByEnter}>
          <p>Are you Admin? Authenticate!!!</p>
          <label className="label" htmlFor="loginId">
            LoginId
          </label>
          <br />
          <input
            type="text"
            name="loginId"
            placeholder="Id Please?"
            value={loginId}
            autoFocus
            onChange={handleChange}
          />
          <br />
          <label className="label" htmlFor="password">
            Secret
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Secret"
            value={password}
            onChange={handleChange}
          />
          <br />
          <div className="button__login" onClick={handleLogin}>
            <p>Login</p>
          </div>
          <span className="cancel__span" onClick={() => history.push("/")}>
            <code>Cancel?</code>
          </span>
          <span>
            <code>{authStatus}</code>
          </span>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.debug("Login State:", state.user);
  const { error, message } = state.user;
  return { error, message };
};
const mapActionToPros = {
  adminLoginAction,
  setUserStateOnError,
};
export default connect(mapStateToProps, mapActionToPros)(Login);
