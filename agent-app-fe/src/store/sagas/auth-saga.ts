import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

import UserModel from "../../models/UserModel";
import authService from "../../services/AuthService";
import { goToSignIn, signIn, signUp } from "../slices/auth";

export function* handleSignIn({
  payload,
}: ReturnType<typeof signIn>): Generator<any, any, string> {
  try {
    const token: string = yield call(authService.signIn, payload.formValues);

    sessionStorage.setItem("token", token);
    yield payload.navigate("/home");
    yield toast.success("Successfully signed in");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleSignUp({
  payload,
}: ReturnType<typeof signUp>): Generator<any, any, UserModel> {
  try {
    yield call(authService.signUp, payload.formValues);

    yield put(goToSignIn());
    yield toast.success("Successfully signed up");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
