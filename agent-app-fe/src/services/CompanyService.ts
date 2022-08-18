import CompanyFormValues from "../models/forms/CompanyFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  COMPANY_REQUEST: "/company/request",
  GET_COMPANIES: "/company",
};

export class CompanyService extends ApiService {
  companyRegisterRequest = async (companyRegisterData: CompanyFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANY_REQUEST,
      companyRegisterData
    );

    return data;
  };

  getCompanies = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_COMPANIES);

    return data;
  };
}

const companyService = new CompanyService();

export default companyService;
