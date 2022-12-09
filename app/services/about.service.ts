import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class AboutService {
  static async getAbout(locale?: string) {
    try {
      return await $api.get(locale + "/api/about/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getAboutFooter(locale?: string) {
    try {
      return await $api.get(locale + "/api/about/footer");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getAboutImages(locale?: string) {
    try {
      return await $api.get(locale + "/api/about/images");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
