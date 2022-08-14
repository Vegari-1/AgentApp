import { all, takeLatest } from "redux-saga/effects";
import { signIn, signUp } from "../slices/auth";
import { companyRegisterRequest } from "../slices/company";
import { addApiKey } from "../slices/dislinkt";
import { handleSignIn, handleSignUp } from "./auth-saga";
import { handleCompanyRegisterRequest } from "./company-saga";
import { handleAddApiKey } from "./dislinkt-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(signIn.type, handleSignIn),
    takeLatest(signUp.type, handleSignUp),
    takeLatest(addApiKey.type, handleAddApiKey),
    takeLatest(companyRegisterRequest.type, handleCompanyRegisterRequest),
  ]);
}
