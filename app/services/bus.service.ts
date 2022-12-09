import axios, { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class BusService {
  static async getBusCategory(locale?: string) {
    try {
      return await $api.get(locale + "/api/busses/categories");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getBusByCategory(locale?: string, query?: IQuery) {
    try {
      return await $api.get(
        locale + "/api/busses/" + query?.category_slug + "/list",
        {
          params: { p: query?.p, page_size: query?.page_size },
        }
      );
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getBusDetail(locale?: string, slug?: string) {
    try {
      return await $api.get(locale + "/api/busses/" + slug + "/detail");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
