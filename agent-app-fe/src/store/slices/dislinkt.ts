import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiKeyPayload } from "../../models/slices/dislinkt";

const initDislinktSliceValues = {};
// DA LI JE OVO SAMO ZA IZMENU STANJA? - aj donos neophodno je, ali ne radi nista nad stanjem
const dislinktSlice = createSlice({
  name: "dislinkt",
  initialState: initDislinktSliceValues,
  reducers: {
    addApiKey(state, action: PayloadAction<ApiKeyPayload>) {},
  },
});

export const { addApiKey } = dislinktSlice.actions;

export default dislinktSlice.reducer;
