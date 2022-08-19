import { all, takeLatest } from "redux-saga/effects";
import {
  ACCEPT_COMPANY_REQUEST,
  ADD_API_KEY,
  AUTO_LOGIN,
  CREATE_COMPANY_COMMENT,
  CREATE_COMPANY_INTERVIEW,
  CREATE_COMPANY_JOB_OFFER,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SALARY,
  DECLINE_COMPANY_REQUEST,
  EDIT_COMPANY,
  GET_COMPANIES,
  GET_COMPANY_BY_ID,
  GET_COMPANY_COMMENTS,
  GET_COMPANY_INTERVIEWS,
  GET_COMPANY_JOB_OFFERS,
  GET_COMPANY_REQUESTS,
  GET_COMPANY_SALARIES,
  LOG_OUT,
  SIGN_IN,
  SIGN_UP,
} from "../actions/action-types";
import {
  handleAutoLogin,
  handleLogOut,
  handleSignIn,
  handleSignUp,
} from "./auth-saga";
import {
  handleAcceptCompanyRequests,
  handleCreateCompanyComment,
  handleCreateCompanyInterview,
  handleCreateCompanyJobOffer,
  handleCreateCompanyRequest,
  handleCreateCompanySalary,
  handleDeclineCompanyRequests,
  handleEditCompany,
  handleGetCompanies,
  handleGetCompanyById,
  handleGetCompanyComments,
  handleGetCompanyInterviews,
  handleGetCompanyJobOffers,
  handleGetCompanyRequests,
  handleGetCompanySalaries,
} from "./company-saga";
import { handleAddApiKey } from "./dislinkt-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(LOG_OUT, handleLogOut),
    takeLatest(AUTO_LOGIN, handleAutoLogin),

    takeLatest(ADD_API_KEY, handleAddApiKey),

    takeLatest(GET_COMPANY_REQUESTS, handleGetCompanyRequests),
    takeLatest(CREATE_COMPANY_REQUEST, handleCreateCompanyRequest),
    takeLatest(ACCEPT_COMPANY_REQUEST, handleAcceptCompanyRequests),
    takeLatest(DECLINE_COMPANY_REQUEST, handleDeclineCompanyRequests),

    takeLatest(GET_COMPANIES, handleGetCompanies),
    takeLatest(GET_COMPANY_BY_ID, handleGetCompanyById),
    takeLatest(EDIT_COMPANY, handleEditCompany),

    takeLatest(GET_COMPANY_JOB_OFFERS, handleGetCompanyJobOffers),
    takeLatest(GET_COMPANY_COMMENTS, handleGetCompanyComments),
    takeLatest(GET_COMPANY_INTERVIEWS, handleGetCompanyInterviews),
    takeLatest(GET_COMPANY_SALARIES, handleGetCompanySalaries),

    takeLatest(CREATE_COMPANY_JOB_OFFER, handleCreateCompanyJobOffer),
    takeLatest(CREATE_COMPANY_COMMENT, handleCreateCompanyComment),
    takeLatest(CREATE_COMPANY_INTERVIEW, handleCreateCompanyInterview),
    takeLatest(CREATE_COMPANY_SALARY, handleCreateCompanySalary),
  ]);
}
