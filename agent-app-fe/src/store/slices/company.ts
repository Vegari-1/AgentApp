import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CompanyModel from "../../models/CompanyModel";
import {
  CompanyRegisterPayload,
  CompanySliceValues,
} from "../../models/slices/company";

const initCompanySliceValues: CompanySliceValues = {
  companies: [],
};

const companySlice = createSlice({
  name: "company",
  initialState: initCompanySliceValues,
  reducers: {
    companyRegisterRequest(
      state,
      action: PayloadAction<CompanyRegisterPayload>
    ) {},
    setCompanies(state, action: PayloadAction<CompanyModel[]>) {
      state.companies = action.payload;
    },
  },
});

export const { companyRegisterRequest, setCompanies } = companySlice.actions;

export default companySlice.reducer;
