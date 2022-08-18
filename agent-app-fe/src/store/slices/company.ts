import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CompanyModel from "../../models/CompanyModel";
import { CompanySliceValues } from "../../models/slices/company";

const initCompanySliceValues: CompanySliceValues = {
  companyRequests: [],
  companies: [],
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
    setUpdatedCompany(state, action: PayloadAction<CompanyModel>) {
      const companyIndex = state.companies.findIndex(
        (company) => company.id === action.payload.id
      );
      state.companies[companyIndex] = action.payload;
    },
  },
});

export const { setCompanyRequests, setCompanies, setUpdatedCompany } =
  companySlice.actions;

export default companySlice.reducer;
