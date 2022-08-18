import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import CompanyModel from "../../models/CompanyModel";
import companyService from "../../services/CompanyService";
import { companyRegisterRequest, setCompanies } from "../slices/company";

// export function* handleCompanyRegisterRequest({
//   payload,
// }: ReturnType<typeof companyRegisterRequest>): Generator<any, any, string> {
//   try {
//     yield call(companyService.companyRegisterRequest, payload.formValues);
//     yield toast.success("Succesfully created company registration request");
//   } catch (error: any) {
//     yield toast.error(error.response.data.message);
//   }
// }

export function* handleGetCompanies(): Generator<any, any, CompanyModel[]> {
  try {
    const companies: CompanyModel[] = yield call(companyService.getCompanies);
    yield put(setCompanies(companies));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
