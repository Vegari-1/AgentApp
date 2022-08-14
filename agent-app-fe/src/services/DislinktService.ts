import ApiKeyFormValues from "../models/forms/ApiKeyFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  APIKEY: "/dislinkt/api-key",
};

export class DislinktService extends ApiService {
  addApiKey = async (apiKeyData: ApiKeyFormValues, token: string) => {
    // DA LI OVDE MOZE INTERCEPTOR NEKI KAO U ANGULARU???
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await this.apiClient.post(
      ENDPOINTS.APIKEY,
      apiKeyData,
      config
    );

    return data;
  };
}

const dislinktService = new DislinktService();

export default dislinktService;
