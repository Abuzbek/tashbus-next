import { AxiosError } from "axios";
import $api from "../api/axios";
import { IQuery } from "../models/query.interface";

export class BusOrderService {
  static async getBusOrder(locale?: string, query?: IQuery) {
    try {
      return await $api.get(locale + "/api/bus-orders", { params: query });
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async createBusOrder(locale?: string, data?: FormData) {
    try {
      return await $api.post(locale + "/api/bus-orders/create", data);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
