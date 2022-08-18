import CompanyFormValues from "../models/forms/CompanyFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  COMPANY_REQUEST: "/company/request",
  COMPANY: "/company",
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

  editCompany = async (companyData: CompanyFormValues) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.COMPANY + "/" + companyData.id,
      companyData
    );

    return data;
  };
}

const companyService = new CompanyService();

export default companyService;
