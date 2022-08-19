import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CompanyModel from "../../models/CompanyModel";
import JobOfferModel from "../../models/JobOfferModel";
import ReviewModel from "../../models/ReviewModel";
import SalaryModel from "../../models/SalaryModel";
import { CompanySliceValues } from "../../models/slices/company";

const initCompanySliceValues: CompanySliceValues = {
  companyRequests: [],
  companies: [],
  activeCompany: {} as CompanyModel,
  activeCompanyJobOffers: [],
  activeCompanyComments: [],
  activeCompanyInterviews: [],
  activeCompanySalaries: [],
};

const companySlice = createSlice({
  name: "company",
  initialState: initCompanySliceValues,
  reducers: {
    setCompanyRequests(state, action: PayloadAction<CompanyModel[]>) {
      state.companyRequests = action.payload;
    },
    setCompanies(state, action: PayloadAction<CompanyModel[]>) {
      state.companies = action.payload;
    },
    setActiveCompany(state, action: PayloadAction<CompanyModel>) {
      state.activeCompany = action.payload;
    },
    setActiveCompanyJobOffers(state, action: PayloadAction<JobOfferModel[]>) {
      state.activeCompanyJobOffers = action.payload;
    },
    setActiveCompanyComments(state, action: PayloadAction<ReviewModel[]>) {
      state.activeCompanyComments = action.payload;
    },
    setActiveCompanyInterviews(state, action: PayloadAction<ReviewModel[]>) {
      state.activeCompanyInterviews = action.payload;
    },
    setActiveCompanySalaries(state, action: PayloadAction<SalaryModel[]>) {
      state.activeCompanySalaries = action.payload;
    },
  },
});

export const {
  setCompanyRequests,
  setCompanies,
  setActiveCompany,
  setActiveCompanyJobOffers,
  setActiveCompanyComments,
  setActiveCompanyInterviews,
  setActiveCompanySalaries,
} = companySlice.actions;

export default companySlice.reducer;
