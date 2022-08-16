import CompanyRegisterFormValues from "../models/forms/CompanyRegisterFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  COMPANYREQUEST: "/company/request",
};

export class CompanyService extends ApiService {
  companyRegisterRequest = async (
    companyRegisterData: CompanyRegisterFormValues
  ) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.COMPANYREQUEST,
      companyRegisterData
    );

    return data;
  };
}

const companyService = new CompanyService();

export default companyService;
