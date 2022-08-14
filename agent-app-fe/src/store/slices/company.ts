import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyRegisterPayload } from "../../models/slices/company";

const initCompanySliceValues = {};
const companySlice = createSlice({
  name: "company",
  initialState: initCompanySliceValues,
  reducers: {
    companyRegisterRequest(
      state,
      action: PayloadAction<CompanyRegisterPayload>
    ) {},
  },
});

export const { companyRegisterRequest } = companySlice.actions;

export default companySlice.reducer;
