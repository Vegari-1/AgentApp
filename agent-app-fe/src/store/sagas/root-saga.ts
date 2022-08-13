import { all, takeLatest } from "redux-saga/effects";
import { signIn, signUp } from "../slices/auth";
import { handleSignIn, handleSignUp } from "./auth-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(signIn.type, handleSignIn),
    takeLatest(signUp.type, handleSignUp),
  ]);
}
