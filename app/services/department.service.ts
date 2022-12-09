import { AxiosError } from "axios";
import $api from "../api/axios";

export class DepartmentService {
  static async getDepartmentList(locale?: string) {
    try {
      return await $api.get(locale + "/api/departments/");
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
  static async getDepartmentById(locale?: string, id?: number | string) {
    try {
      return await $api.get(locale + "/api/departments/" + id);
    } catch (err) {
      const error = err as AxiosError;
      return error.response;
    }
  }
}
