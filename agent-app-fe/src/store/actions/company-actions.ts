import CompanyFormValues from "../../models/forms/CompanyFormValues";
import {
  ACCEPT_COMPANY_REQUEST,
  CREATE_COMPANY_REQUEST,
  DECLINE_COMPANY_REQUEST,
  EDIT_COMPANY,
  GET_COMPANIES,
  GET_COMPANY_REQUESTS,
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

export const editCompany = (companyFormValues: CompanyFormValues) => {
  return { type: EDIT_COMPANY, payload: companyFormValues };
};
