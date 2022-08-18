import SignInFormValues from "../../models/forms/SignInFormValues";
import SignUpFormValues from "../../models/forms/SingUpFormValues";
import { LOG_OUT, SIGN_IN, SIGN_UP } from "./action-types";

// payload je sta saljemo na bek
export const signIn = (singInFormValues: SignInFormValues) => {
  return { type: SIGN_IN, payload: singInFormValues };
};

export const signUp = (singUpFormValues: SignUpFormValues) => {
  return { type: SIGN_UP, payload: singUpFormValues };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
