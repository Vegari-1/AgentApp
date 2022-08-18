import CompanyFormValues from "../models/forms/CompanyFormValues";
import JobOfferFormValues from "../models/forms/JobOfferFormValues";
import ReviewFormValues from "../models/forms/ReviewFormValues";
import SalaryFormValues from "../models/forms/SalaryFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  COMPANY_REQUEST: "/company/request",
  COMPANY: "/company",
  JOB_OFFER: "/job-offer",
  COMMENT: "/comment",
  INTERVIEW: "/interview",
  SALARY: "/salary",
};

export class CompanyService extends ApiService {
  getCompanyRequests = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.COMPANY_REQUEST);

    return data;
  };

  createCompanyRequest = async (companyRequestData: CompanyFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY_REQUEST,
      companyRequestData
    );

    return data;
  };

  acceptCompanyRequest = async (id: number) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY_REQUEST + "/" + id
    );

    return data;
  };

  declineCompanyRequest = async (id: number) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.COMPANY_REQUEST + "/" + id
    );

    return data;
  };

  getCompanies = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.COMPANY);

    return data;
  };

  getCompanyById = async (id: number) => {
    const { data } = await this.apiClient.get(ENDPOINTS.COMPANY + "/" + id);

    return data;
  };

  editCompany = async (companyData: CompanyFormValues) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.COMPANY + "/" + companyData.id,
      companyData
    );

    return data;
  };

  getCompanyJobOffers = async (companyId: number) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.COMPANY + "/" + companyId + ENDPOINTS.JOB_OFFER
    );

    return data;
  };

  getCompanyComments = async (companyId: number) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.COMPANY + "/" + companyId + ENDPOINTS.COMMENT
    );

    return data;
  };

  getCompanyInterviews = async (companyId: number) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.COMPANY + "/" + companyId + ENDPOINTS.INTERVIEW
    );

    return data;
  };

  getCompanySalaries = async (companyId: number) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.COMPANY + "/" + companyId + ENDPOINTS.SALARY + "/mean"
    );

    return data;
  };

  createCompanyJobOffer = async (jobOfferData: JobOfferFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY + "/" + jobOfferData.companyId + ENDPOINTS.JOB_OFFER,
      jobOfferData
    );

    return data;
  };

  createCompanyComment = async (commentData: ReviewFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY + "/" + commentData.companyId + ENDPOINTS.COMMENT,
      commentData
    );

    return data;
  };

  createCompanyInterview = async (interviewData: ReviewFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY + "/" + interviewData.companyId + ENDPOINTS.INTERVIEW,
      interviewData
    );

    return data;
  };

  createCompanySalary = async (salaryData: SalaryFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY + "/" + salaryData.companyId + ENDPOINTS.SALARY,
      salaryData
    );

    return data;
  };
}

const companyService = new CompanyService();

export default companyService;
