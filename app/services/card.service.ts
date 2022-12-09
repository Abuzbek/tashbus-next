import { AxiosError } from "axios";
import $api from "../api/axios";

export class CardService {
  static async getCardList(locale?: string) {
    try {
      return await $api.get(locale + "/api/cards/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getCardSteps(locale?: string, category?: string) {
    try {
      return await $api.get(locale + "/api/cards/steps/" + category);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
