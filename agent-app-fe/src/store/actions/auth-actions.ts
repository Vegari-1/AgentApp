import SignUpFormValues from "../../models/forms/SingUpFormValues";
import { SignInPayload } from "../../models/slices/auth";
import { LOG_OUT, SIGN_IN, SIGN_UP } from "./action-types";

export const signIn = (singInPayload: SignInPayload) => {
  return { type: SIGN_IN, payload: singInPayload };
};

export const signUp = (singUpFormValues: SignUpFormValues) => {
  return { type: SIGN_UP, payload: singUpFormValues };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
