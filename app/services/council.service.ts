import { AxiosError } from "axios";
import $api from "../api/axios";

export class CouncilService {
  static async getCouncilByCategory(locale?: string, menu_slug?: string) {
    try {
      return await $api.get(locale + "/api/council/" + menu_slug);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
