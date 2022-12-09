import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export interface ErrorsData {
  title?: string;
  body?: string;
}

export class ErrorsCreateService {
  static async sendError(locale?: string, data?: FormData) {
    try {
      return await $api.post(locale + "/api/errors/create", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
