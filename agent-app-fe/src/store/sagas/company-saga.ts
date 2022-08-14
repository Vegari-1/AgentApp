import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import companyService from "../../services/CompanyService";
import { companyRegisterRequest } from "../slices/company";

export function* handleCompanyRegisterRequest({
  payload,
}: ReturnType<typeof companyRegisterRequest>): Generator<any, any, string> {
  try {
    const token = sessionStorage.getItem("token");
    yield call(
      companyService.companyRegisterRequest,
      payload.formValues,
      token!
    );
    yield toast.success("Succesfully created company registration request");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
