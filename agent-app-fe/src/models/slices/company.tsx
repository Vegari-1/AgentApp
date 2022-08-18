import CompanyModel from "../CompanyModel";
import CompanyFormValues from "../forms/CompanyFormValues";

export interface CompanySliceValues {
  companies: CompanyModel[];
}

export interface CompanyRegisterPayload {
  formValues: CompanyFormValues;
}
