import { ADMIN_LOGIN, LOGIN_ERROR, LOGOUT } from "./actionType";
import * as apis from "../../api/apis";

export function adminLoginAction(userInfo) {
  return async (dispath) => {
    let loginResponse = await apis.loginApi(userInfo);
    dispath({ type: ADMIN_LOGIN, loginResponse });
  };
}
export function setUserStateOnError() {
  return (dispatch) => {
    dispatch({ type: LOGIN_ERROR });
  };
}
export function logOutAction() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}
