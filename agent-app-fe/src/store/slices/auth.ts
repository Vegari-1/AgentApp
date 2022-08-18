import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDataPayload } from "../../models/slices/auth";

const initAuthSliceValues = {
  signInActive: false,
  userData: {} as UserDataPayload,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceValues,
  reducers: {
    setSignInActive(state, action: PayloadAction<boolean>) {
      state.signInActive = action.payload;
    },
    setUserData(state, action: PayloadAction<UserDataPayload>) {
      state.userData = action.payload;
    },
    updateApiKey(state, action: PayloadAction<string>) {
      state.userData.apiKey = action.payload;
    },
  },
});

export const { setSignInActive, setUserData, updateApiKey } = authSlice.actions;

export default authSlice.reducer;
