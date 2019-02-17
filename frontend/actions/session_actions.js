import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};
const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};
const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  };
};



export const login = (currentUser) => dispatch => {
  APIUtil.login(currentUser).then(user => (
    dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err.responseJSON)
  ));
};
export const signup = (user) => dispatch => {
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err.responseJSON)
  ));
};
export const logout = () => dispatch => {
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ));
};
export const destroyErrors = () => dispatch => {
  dispatch(removeErrors());
};