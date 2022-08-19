import { NavigateFunction } from "react-router-dom";

import SignInFormValues from "../forms/SignInFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}

export interface UserDataPayload {
  id: number;
  username: string;
  name: string;
  surname: string;
  role: string;
  companyId: number;
  apiKey: string;
}

export interface AutoLoginPayload {
  navigate: NavigateFunction;
}
