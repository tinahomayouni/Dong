import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./const";

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}
