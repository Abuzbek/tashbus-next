import axios, { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class SearchService {
  static async getSearchResult(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/search/", { params: query });
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
