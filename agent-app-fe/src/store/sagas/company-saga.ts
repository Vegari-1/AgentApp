import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import CompanyModel from "../../models/CompanyModel";
import JobOfferModel from "../../models/JobOfferModel";
import ReviewModel from "../../models/ReviewModel";
import SalaryModel from "../../models/SalaryModel";
import companyService from "../../services/CompanyService";
import dislinktService from "../../services/DislinktService";
import {
  acceptCompanyRequest,
  createCompanyComment,
  createCompanyInterview,
  createCompanyJobOffer,
  createCompanyRequest,
  createCompanySalary,
  declineCompanyRequest,
  editCompany,
  getCompanyById,
  getCompanyComments,
  getCompanyInterviews,
  getCompanyJobOffers,
  getCompanySalaries,
} from "../actions/company-actions";
import {
  setActiveCompany,
  setActiveCompanyComments,
  setActiveCompanyInterviews,
  setActiveCompanyJobOffers,
  setActiveCompanySalaries,
  setCompanies,
  setCompanyRequests,
} from "../slices/company";

export function* handleGetCompanyRequests(): Generator<
  any,
  void,
  CompanyModel[]
> {
  try {
    const companyRequests: CompanyModel[] = yield call(
      companyService.getCompanyRequests
    );
    yield put(setCompanyRequests(companyRequests));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateCompanyRequest({
  payload,
}: ReturnType<typeof createCompanyRequest>): Generator<
  any,
  void,
  CompanyModel
> {
  try {
    yield call(companyService.createCompanyRequest, payload);
    yield toast.success("Succesfully created company registration request");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleAcceptCompanyRequests({
  payload,
}: ReturnType<typeof acceptCompanyRequest>): Generator<
  any,
  void,
  CompanyModel
> {
  try {
    yield call(companyService.acceptCompanyRequest, payload);
    yield call(handleGetCompanyRequests);
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleDeclineCompanyRequests({
  payload,
}: ReturnType<typeof declineCompanyRequest>): Generator<any, void, void> {
  try {
    yield call(companyService.declineCompanyRequest, payload);
    yield call(handleGetCompanyRequests);
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanies(): Generator<any, void, CompanyModel[]> {
  try {
    const companies: CompanyModel[] = yield call(companyService.getCompanies);
    yield put(setCompanies(companies));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanyById({
  payload,
}: ReturnType<typeof getCompanyById>): Generator<any, void, CompanyModel> {
  try {
    const company: CompanyModel = yield call(
      companyService.getCompanyById,
      payload
    );
    yield put(setActiveCompany(company));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleEditCompany({
  payload,
}: ReturnType<typeof editCompany>): Generator<any, void, CompanyModel> {
  try {
    const company: CompanyModel = yield call(
      companyService.editCompany,
      payload
    );
    yield put(setActiveCompany(company));
    yield toast.success("Succesfully updated company");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanyJobOffers({
  payload,
}: ReturnType<typeof getCompanyJobOffers>): Generator<
  any,
  void,
  JobOfferModel[]
> {
  try {
    const companyJobOffers: JobOfferModel[] = yield call(
      companyService.getCompanyJobOffers,
      payload
    );
    yield put(setActiveCompanyJobOffers(companyJobOffers));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanyComments({
  payload,
}: ReturnType<typeof getCompanyComments>): Generator<any, void, ReviewModel[]> {
  try {
    const companyComments: ReviewModel[] = yield call(
      companyService.getCompanyComments,
      payload
    );
    yield put(setActiveCompanyComments(companyComments));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanyInterviews({
  payload,
}: ReturnType<typeof getCompanyInterviews>): Generator<
  any,
  void,
  ReviewModel[]
> {
  try {
    const companyInterviews: ReviewModel[] = yield call(
      companyService.getCompanyInterviews,
      payload
    );
    yield put(setActiveCompanyInterviews(companyInterviews));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanySalaries({
  payload,
}: ReturnType<typeof getCompanySalaries>): Generator<any, void, SalaryModel[]> {
  try {
    const companySalaries: SalaryModel[] = yield call(
      companyService.getCompanySalaries,
      payload
    );
    yield put(setActiveCompanySalaries(companySalaries));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateCompanyJobOffer({
  payload,
}: ReturnType<typeof createCompanyJobOffer>): Generator<any, void, any> {
  try {
    const jobOffer: JobOfferModel = yield call(
      companyService.createCompanyJobOffer,
      payload
    );
    yield toast.success("Succesfully created company job offer");
    yield call(
      handleGetCompanyJobOffers,
      getCompanyJobOffers(payload.companyId!)
    );
    if (payload.share) {
      yield call(dislinktService.shareJobOffer, jobOffer.id);
    }
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateCompanyComment({
  payload,
}: ReturnType<typeof createCompanyComment>): Generator<any, void, any> {
  try {
    yield call(companyService.createCompanyComment, payload);
    yield call(
      handleGetCompanyComments,
      getCompanyComments(payload.companyId!)
    );
    yield toast.success("Succesfully created company comment");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateCompanyInterview({
  payload,
}: ReturnType<typeof createCompanyInterview>): Generator<any, void, any> {
  try {
    yield call(companyService.createCompanyInterview, payload);
    yield call(
      handleGetCompanyInterviews,
      getCompanyInterviews(payload.companyId!)
    );
    yield toast.success("Succesfully created company interview");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateCompanySalary({
  payload,
}: ReturnType<typeof createCompanySalary>): Generator<any, void, any> {
  try {
    yield call(companyService.createCompanySalary, payload);
    yield call(
      handleGetCompanySalaries,
      getCompanySalaries(payload.companyId!)
    );
    yield toast.success("Succesfully created company salary");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
