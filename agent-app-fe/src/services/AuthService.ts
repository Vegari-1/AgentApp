import SignInFormValues from "../models/forms/SignInFormValues";
import SignUpFormValues from "../models/forms/SingUpFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  SIGNIN: "/auth/login",
  SIGNUP: "/auth/register",
};

export class AuthService extends ApiService {
  signIn = async (signInData: SignInFormValues) => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGNIN, signInData);
  
    return data;
  };

  signUp = async (signUpData: SignUpFormValues) => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGNUP, signUpData);

    return data;
  };
}

const authService = new AuthService();

export default authService;
