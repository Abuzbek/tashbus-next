import { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class DocumentService {
  static async getDocumentByMenu(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/document/" + query?.slug, {
        params: {
          p: query?.p,
          page_size: query?.page_size,
        },
      });
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
