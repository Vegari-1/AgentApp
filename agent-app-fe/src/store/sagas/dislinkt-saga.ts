import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import dislinktService from "../../services/DislinktService";
import { addApiKey } from "../actions/dislinkt-actions";
import { updateApiKey } from "../slices/auth";

export function* handleAddApiKey({
  payload,
}: ReturnType<typeof addApiKey>): Generator<any, void, string> {
  try {
    yield call(dislinktService.addApiKey, payload);
    yield put(updateApiKey(payload.apiKey));
    yield toast.success("Successfully updated API key");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
