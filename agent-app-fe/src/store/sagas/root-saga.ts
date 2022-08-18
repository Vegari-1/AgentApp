import { all, takeLatest } from "redux-saga/effects";
import {
  ACCEPT_COMPANY_REQUEST,
  CREATE_COMPANY_REQUEST,
  DECLINE_COMPANY_REQUEST,
  EDIT_COMPANY,
  GET_COMPANIES,
  GET_COMPANY_REQUESTS,
  LOG_OUT,
  SIGN_IN,
  SIGN_UP,
} from "../actions/action-types";
import { handleLogOut, handleSignIn, handleSignUp } from "./auth-saga";
import {
  handleAcceptCompanyRequests,
  handleCreateCompanyRequest,
  handleDeclineCompanyRequests,
  handleEditCompany,
  handleGetCompanies,
  handleGetCompanyRequests,
} from "./company-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(LOG_OUT, handleLogOut),

    takeLatest(GET_COMPANY_REQUESTS, handleGetCompanyRequests),
    takeLatest(CREATE_COMPANY_REQUEST, handleCreateCompanyRequest),
    takeLatest(ACCEPT_COMPANY_REQUEST, handleAcceptCompanyRequests),
    takeLatest(DECLINE_COMPANY_REQUEST, handleDeclineCompanyRequests),

    takeLatest(GET_COMPANIES, handleGetCompanies),
    takeLatest(EDIT_COMPANY, handleEditCompany),
    // takeLatest(signUp.type, handleSignUp),
    // takeLatest(addApiKey.type, handleAddApiKey),
    // takeLatest(companyRegisterRequest.type, handleCompanyRegisterRequest),
  ]);
}
