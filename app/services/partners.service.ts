import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class PartnerService {
  static async getPartnerList(locale?: string) {
    try {
      return await $api.get(locale + "/api/partners/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
