import axios, { AxiosError } from "axios";
import $api from "../api/axios";

export class QuestionService {
  static async getQuestionList(locale?: string) {
    try {
      return await $api.get(locale + "/api/questions/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getAnswerStatistics(locale?: string) {
    try {
      return await $api.get(locale + "/api/questions/answer/statistics");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async createQuestion(locale?: string, data?: any) {
    try {
      return await $api.post(locale + "/api/questions/create", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
