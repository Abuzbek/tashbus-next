import axios, { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class GalleryService {
  static async getPhotoGallery(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/gallery/photo/", { params: query });
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getVideoGallery(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/gallery/video/", { params: query });
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getPhotoGalleryDetail(locale?: string, id?: number | string) {
    try {
      return await $api.get(locale + "/api/gallery/photo/" + id);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
