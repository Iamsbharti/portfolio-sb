import { ADMIN_LOGIN, LOGIN_ERROR, LOGOUT } from "../actions/actionType";
let user = {
  firstName: "",
  lastName: "",
  userName: "",
  userId: "",
  error: false,
  message: "",
};
export function userReducer(_user = user, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return action.loginResponse;

    case LOGIN_ERROR:
      return _user;
    case LOGOUT:
      return user;
    default:
      return _user;
  }
}
