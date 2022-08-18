import CompanyModel from "../CompanyModel";
import CompanyFormValues from "../forms/CompanyFormValues";

export interface CompanySliceValues {
  companyRequests: CompanyModel[];
  companies: CompanyModel[];
}

export interface CompanyRegisterPayload {
  formValues: CompanyFormValues;
}
