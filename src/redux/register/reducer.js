import Axios from '../../API/client';
import history from '../../history/history';

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
    const data = yield Axios.post('/register', { email, password });

    yield put(registerSuccess(data.data));
    yield history.push("/dashboard");
    console.log('here is pushHistory')
  } catch (e) {
    yield put(registerFailed(e));
  }
}

export default registerReducer;
