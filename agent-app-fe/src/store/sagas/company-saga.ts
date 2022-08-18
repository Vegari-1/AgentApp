import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import CompanyModel from "../../models/CompanyModel";
import companyService from "../../services/CompanyService";
import {
  acceptCompanyRequest,
  createCompanyRequest,
  declineCompanyRequest,
  editCompany,
} from "../actions/company-actions";
import {
  setCompanies,
  setCompanyRequests,
  setUpdatedCompany,
} from "../slices/company";

export function* handleGetCompanyRequests(): Generator<
  any,
  any,
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
}: ReturnType<typeof createCompanyRequest>): Generator<any, any, CompanyModel> {
  try {
    yield call(companyService.createCompanyRequest, payload);
    yield toast.success("Succesfully created company registration request");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleAcceptCompanyRequests({
  payload,
}: ReturnType<typeof acceptCompanyRequest>): Generator<any, any, CompanyModel> {
  try {
    yield call(companyService.acceptCompanyRequest, payload);
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleDeclineCompanyRequests({
  payload,
}: ReturnType<typeof declineCompanyRequest>): Generator<any, any, void> {
  try {
    yield call(companyService.declineCompanyRequest, payload);
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetCompanies(): Generator<any, any, CompanyModel[]> {
  try {
    const companies: CompanyModel[] = yield call(companyService.getCompanies);
    yield put(setCompanies(companies));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleEditCompany({
  payload,
}: ReturnType<typeof editCompany>): Generator<any, any, CompanyModel> {
  try {
    const company: CompanyModel = yield call(
      companyService.editCompany,
      payload
    );
    yield put(setUpdatedCompany(company));
    // ovde je pitanje, kako cemo update state da odradimo?
    // pa verovatno na useeffect za pregled (kao za admina)
    // posto smo update element, trebali bismo da ga update i na stanju
    // mozemo da cuvamo kao trenutno gledanu kompaniju
    // ili samo ovde opet filter da update
    // ne znam sta je bolje
    // ako imamo pojedinacnu, onda dupliramo stanje
    // hipotetecki ako bi postojala paginacija, mozda onda ne bismo imali u tom trenutku na stanju
    // bas tu kompaniju (ili bismo morali da je imamo, nekako mora doci do nje)
    // MOZE DA DODJE PREKO RUTE DO NASE KOMPANIJE, ONDA JE POTENCIJALNO NEMAMO NA STANJU
    // (ako dodje preko rute, svakako sve gubimo sa stanja, tako da ne pokrivamo taj slucaj)
    // u svakom drugom slucaju, mora nam postojati na stanju vec (ucitana uz sve)
    // pre nego sto joj pristupimo direktno
    yield toast.success("Succesfully updated company");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
