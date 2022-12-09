import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class UsefulLinkService {
  static async getUsefulLinks(locale?: string) {
    try {
      return await $api.get(locale + "/api/useful-links/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
