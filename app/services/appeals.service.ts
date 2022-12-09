import axios, { AxiosError } from "axios";
import $api from "../api/axios";
import { IAppealsCheck } from "../models/appeals.interface";

export class AppealService {
  static async getAppealsStatistics(locale?: string) {
    try {
      return await $api.get(locale + "/api/appeals/statistics");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async appealsCreate(locale?: string, data?: FormData) {
    try {
      return await $api.post(locale + "/api/appeals/create", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async appealsCheck(locale?: string, data?: IAppealsCheck) {
    try {
      return await $api.post(locale + "/api/appeals/check", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
