import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { UserDataPayload } from "../../models/slices/auth";
import UserModel from "../../models/UserModel";
import authService from "../../services/AuthService";
import jwt from "jwt-decode";
import { signIn, signUp } from "../actions/auth-actions";
import { setSignInActive, setUserData } from "../slices/auth";

export function* handleSignIn({
  payload,
}: ReturnType<typeof signIn>): Generator<any, void, string> {
  try {
    const token: string = yield call(authService.signIn, payload.formValues);

    sessionStorage.setItem("token", token);
    const tokenUserPayload: any = jwt(token);
    const userDataPayload: UserDataPayload = {
      id: tokenUserPayload.user.id,
      username: tokenUserPayload.sub,
      name: tokenUserPayload.user.name,
      surname: tokenUserPayload.user.surname,
      role: tokenUserPayload.user.authorities[0].name,
      companyId: tokenUserPayload.user.companyId,
      apiKey: tokenUserPayload.user.apiKey,
    };
    yield put(setUserData(userDataPayload));

    if (userDataPayload.role === "ROLE_ADMIN") {
      yield payload.navigate("/requests");
    } else {
      yield payload.navigate("/profile");
    }
    yield toast.success("Successfully signed in");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleSignUp({
  payload,
}: ReturnType<typeof signUp>): Generator<any, void, UserModel> {
  try {
    yield call(authService.signUp, payload);

    yield put(setSignInActive(true));
    yield toast.success("Successfully signed up");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleLogOut(): Generator<any, void, void> {
  try {
    sessionStorage.removeItem("token");
    yield put(setUserData({} as UserDataPayload));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

// export function* handleAutoLogin({
//   payload,
// }: ReturnType<typeof autoLogin>): Generator<any, any, string> {
//   const token: string = sessionStorage.getItem("token")!;
//   if (token) {
//     const decodedAuthToken: any = jwt(token);
//     const dateNowSeconds = Math.round(new Date().getTime() / 1000);
//     //still valid auth token
//     if (decodedAuthToken.exp - dateNowSeconds > 0) {
//       yield put(signIn({}));
//     }
//     //expired auth token
//     else {
//       yield put(logoutAction());
//       yield payload.navigate("/auth");
//     }
//   }
// }
