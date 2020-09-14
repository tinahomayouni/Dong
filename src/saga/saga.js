import { all, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../redux/login/const";
import { loginSaga } from "../redux/login/reducer";

export default function* rootSaga() {
  yield all([yield takeEvery(LOGIN, loginSaga)]);
}
