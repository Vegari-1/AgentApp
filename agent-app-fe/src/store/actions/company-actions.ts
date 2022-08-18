import CompanyFormValues from "../../models/forms/CompanyFormValues";
import JobOfferFormValues from "../../models/forms/JobOfferFormValues";
import ReviewFormValues from "../../models/forms/ReviewFormValues";
import SalaryFormValues from "../../models/forms/SalaryFormValues";
import {
  ACCEPT_COMPANY_REQUEST,
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
} from "./action-types";

export const getCompanyRequests = () => {
  return { type: GET_COMPANY_REQUESTS };
};

export const createCompanyRequest = (requestFormValues: CompanyFormValues) => {
  return { type: CREATE_COMPANY_REQUEST, payload: requestFormValues };
};

export const acceptCompanyRequest = (id: number) => {
  return { type: ACCEPT_COMPANY_REQUEST, payload: id };
};

export const declineCompanyRequest = (id: number) => {
  return { type: DECLINE_COMPANY_REQUEST, payload: id };
};

export const getCompanies = () => {
  return { type: GET_COMPANIES };
};

export const getCompanyById = (id: number) => {
  return { type: GET_COMPANY_BY_ID, payload: id };
};

export const editCompany = (companyFormValues: CompanyFormValues) => {
  return { type: EDIT_COMPANY, payload: companyFormValues };
};

export const getCompanyJobOffers = (companyId: number) => {
  return { type: GET_COMPANY_JOB_OFFERS, payload: companyId };
};

export const getCompanyComments = (companyId: number) => {
  return { type: GET_COMPANY_COMMENTS, payload: companyId };
};

export const getCompanyInterviews = (companyId: number) => {
  return { type: GET_COMPANY_INTERVIEWS, payload: companyId };
};

export const getCompanySalaries = (companyId: number) => {
  return { type: GET_COMPANY_SALARIES, payload: companyId };
};

export const createCompanyJobOffer = (
  jobOfferFormValues: JobOfferFormValues
) => {
  return { type: CREATE_COMPANY_JOB_OFFER, payload: jobOfferFormValues };
};

export const createCompanyComment = (commentFormValues: ReviewFormValues) => {
  return { type: CREATE_COMPANY_COMMENT, payload: commentFormValues };
};

export const createCompanyInterview = (
  interviewFormValues: ReviewFormValues
) => {
  return { type: CREATE_COMPANY_INTERVIEW, payload: interviewFormValues };
};

export const createCompanySalary = (salaryFormValues: SalaryFormValues) => {
  return { type: CREATE_COMPANY_SALARY, payload: salaryFormValues };
};
