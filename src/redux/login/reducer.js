import { loginFailed, loginSuccess } from "./action";
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./const";
import { put, select } from "redux-saga/effects";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export function* loginSaga() {
  try {
    const { email, password } = yield select((state) => state.loginReducer);
    const data = yield axios({
      url: "https://reqres.in/api/login",
      method: "post",
      data: { email, password },
    });

    yield put(loginSuccess(data.data));
    // yield history.push("./dashboard");
  } catch (e) {
    yield put(loginFailed(e));
  }
}

export default loginReducer;
