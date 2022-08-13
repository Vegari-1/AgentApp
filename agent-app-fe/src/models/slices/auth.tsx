import { NavigateFunction } from "react-router-dom";

import SignInFormValues from "../forms/SignInFormValues";
import SignUpFormValues from "../forms/SingUpFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}

export interface SignUpPayload {
  formValues: SignUpFormValues;
}

export interface UserDataPayload {
  displayName: string;
  role: string;
}
