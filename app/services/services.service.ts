import { AxiosError } from "axios";
import $api from "../api/axios";

export class ServicesService {
  static async getServiceList(locale?: string) {
    try {
      return await $api.get(locale + "/api/services/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
