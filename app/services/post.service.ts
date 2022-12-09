import axios, { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class PostService {
  static async getPostByMenuSlug(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/post/" + query?.slug, {
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
  static async getPostDetail(locale?: string, slug?: string) {
    try {
      return await $api.get(locale + "/api/post/detail/" + slug);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
