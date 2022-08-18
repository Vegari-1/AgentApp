import { all, takeLatest } from "redux-saga/effects";
import {
  GET_COMPANIES,
  LOG_OUT,
  SIGN_IN,
  SIGN_UP,
} from "../actions/action-types";
import { handleLogOut, handleSignIn, handleSignUp } from "./auth-saga";
import { handleGetCompanies } from "./company-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(LOG_OUT, handleLogOut),
    takeLatest(GET_COMPANIES, handleGetCompanies),
    // takeLatest(signUp.type, handleSignUp),
    // takeLatest(addApiKey.type, handleAddApiKey),
    // takeLatest(companyRegisterRequest.type, handleCompanyRegisterRequest),
  ]);
}
