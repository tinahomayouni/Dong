import axios from "axios";
import { put, select } from "redux-saga/effects";
import { registerFailed, registerSuccess } from "./action";
import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "./const";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: "",
      };
    case REGISTER_FAILED:
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

export function* registerSaga() {
  try {
    const { email, password } = yield select((state) => state.registerReducer);
    const data = yield axios({
      url: "https://reqres.in/api/register",
      method: "post",
      data: { email, password },
    });

    yield put(registerSuccess(data.data));
    // yield history.push("./dashboard");
  } catch (e) {
    yield put(registerFailed(e));
  }
}

export default registerReducer;
