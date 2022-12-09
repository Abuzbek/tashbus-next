import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class EnterpriceService {
  static async getEnterpriceList(locale?: string) {
    try {
      return await $api.get(locale + "/api/enterprise/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getEnterpriceById(locale?: string, id?: string | number) {
    try {
      return await $api.get(locale + "/api/enterprise/" + id);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
