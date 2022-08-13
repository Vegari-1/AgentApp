import axios, { AxiosInstance } from "axios";

export class HttpService {
  client: AxiosInstance;

  constructor(options = {}) {
    this.client = axios.create(options);
  }
}

const options = {
  baseURL: process.env.REACT_APP_API_URL,
};

const httpService = new HttpService(options);

export default httpService;
