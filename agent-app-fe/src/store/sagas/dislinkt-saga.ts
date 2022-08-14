import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import dislinktService from "../../services/DislinktService";
import { addApiKey } from "../slices/dislinkt";

export function* handleAddApiKey({
  payload,
}: ReturnType<typeof addApiKey>): Generator<any, any, string> {
  try {
    const token = sessionStorage.getItem("token");
    yield call(dislinktService.addApiKey, payload.formValues, token!);
    yield toast.success("Successfully added API key");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
