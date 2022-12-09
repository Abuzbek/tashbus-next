import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class PriceService {
  static async getPriceList(locale?: string) {
    try {
      return await $api.get(locale + "/api/prices");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
