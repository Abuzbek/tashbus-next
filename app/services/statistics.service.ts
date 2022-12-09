import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class StatisticsService {
  static async getStatistics(locale?: string) {
    try {
      return await $api.get(locale + "/api/statistics/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getStatisticsApp(locale?: string) {
    try {
      return await $api.get(locale + "/api/statistics_app/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
