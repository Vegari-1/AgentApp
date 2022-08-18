import ApiKeyFormValues from "../../models/forms/ApiKeyFormValues";
import { ADD_API_KEY } from "./action-types";

export const addApiKey = (ApiKeyFormValues: ApiKeyFormValues) => {
  return { type: ADD_API_KEY, payload: ApiKeyFormValues };
};
