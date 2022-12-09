import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class LeadershipService {
  static async getLeadershipList(locale?: string) {
    try {
      return await $api.get(locale + "/api/leadership/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getLeadershipByCategory(locale?: string, category?: string) {
    try {
      return await $api.get(locale + "/api/leadership/" + category);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getLeadershipById(locale?: string, id?: number | string) {
    try {
      return await $api.get(locale + "/api/leadership/" + id + "/detail");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
