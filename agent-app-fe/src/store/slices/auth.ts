import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SignInPayload, SignUpPayload, UserDataPayload } from "../../models/slices/auth";

const initAuthSliceValues = {
  signInActive: false,
  userData: {} as UserDataPayload
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceValues,
  reducers: {
    signIn(state, action: PayloadAction<SignInPayload>) {},
    signUp(state, action: PayloadAction<SignUpPayload>) {},
    goToSignIn(state) {
      state.signInActive = true;
    },
    userData(state, action: PayloadAction<UserDataPayload>) {
      state.userData = action.payload;
    }
  },
});

export const { signIn, signUp, goToSignIn, userData } = authSlice.actions;

export default authSlice.reducer;
