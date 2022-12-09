import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { VacancyService } from "../../services/vacancy.service";

interface MenuArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  category?: string | undefined;
  id?: string | number;
}

export const getVacancyByCategory = createAsyncThunk(
  "vacancy/getVacancyByCategory",
  async ({ locale, opt, category }: MenuArgs, thunkApi) => {
    try {
      const response = await VacancyService.getVacancyByCategory(
        locale,
        category
      );
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getVacancyDetail = createAsyncThunk(
  "vacancy/getVacancyDetail",
  async ({ locale, opt, id }: MenuArgs, thunkApi) => {
    try {
      const response = await VacancyService.getVacancyDetail(locale, id);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
