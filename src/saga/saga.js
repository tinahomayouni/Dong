import { all, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../redux/login/const";
import { loginSaga } from "../redux/login/reducer";
import { REGISTER } from "../redux/register/const";
import { registerSaga } from "../redux/register/reducer";

export default function* rootSaga() {
  yield all([yield takeEvery(LOGIN, loginSaga)]);
  yield all([yield takeEvery(REGISTER, registerSaga)]);
}
