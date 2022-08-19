import ApiKeyFormValues from "../models/forms/ApiKeyFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  APIKEY: "/dislinkt/api-key",
  SHARE: "/dislinkt/share",
};

export class DislinktService extends ApiService {
  addApiKey = async (apiKeyData: ApiKeyFormValues) => {
    const { data } = await this.apiClient.post(ENDPOINTS.APIKEY, apiKeyData);

    return data;
  };

  shareJobOffer = async (jobOfferId: number) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.SHARE + "/" + jobOfferId
    );

    return data;
  };
}

const dislinktService = new DislinktService();

export default dislinktService;
