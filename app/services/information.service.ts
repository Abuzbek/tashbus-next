import { AxiosError } from "axios";
import $api from "../api/axios";

export class InformationService {
  static async contactCreateInformation(locale?: string, data?: FormData) {
    try {
      return await $api.post(locale + "/api/information/contact/create", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getCorruptionInformation(locale?: string) {
    try {
      return await $api.get(locale + "/api/information/corruption/info");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getHotlineInformation(locale?: string) {
    try {
      return await $api.get(locale + "/api/information/hotline");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getInformationById(locale?: string, id?: number | string) {
    try {
      return await $api.get(locale + "/api/information/info/" + id);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
