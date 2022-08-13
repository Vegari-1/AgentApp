import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SignInPayload, SignUpPayload } from "../../models/slices/auth";

const initAuthSliceValues = {
  signInActive: false,
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
  },
});

export const { signIn, signUp, goToSignIn } = authSlice.actions;

export default authSlice.reducer;
