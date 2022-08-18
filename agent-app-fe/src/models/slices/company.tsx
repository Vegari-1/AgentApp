import CompanyModel from "../CompanyModel";
import CompanyFormValues from "../forms/CompanyFormValues";
import JobOfferModel from "../JobOfferModel";
import ReviewModel from "../ReviewModel";
import SalaryModel from "../SalaryModel";

export interface CompanySliceValues {
  companyRequests: CompanyModel[];
  companies: CompanyModel[];
  activeCompany: CompanyModel;
  activeCompanyJobOffers: JobOfferModel[];
  activeCompanyComments: ReviewModel[];
  activeCompanyInterviews: ReviewModel[];
  activeCompanySalaries: SalaryModel[];
}

export interface CompanyRegisterPayload {
  formValues: CompanyFormValues;
}
