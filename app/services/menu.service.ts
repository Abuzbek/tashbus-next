import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class MenuService {
  static async getAllMenu(locale?: string) {
    try {
      return await $api.get(locale + "/api/menu");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
