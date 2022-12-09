import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class VacancyService {
  static async getVacancyByCategory(locale?: string, category?: string) {
    try {
      return await $api.get(locale + "/api/vacancy/" + category);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getVacancyDetail(locale?: string, id?: string | number) {
    try {
      return await $api.get(locale + "/api/vacancy/" + id + "/detail");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
