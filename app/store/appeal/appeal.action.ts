import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { IAppealsCheck } from "../../models/appeals.interface";
import { AppealService } from "../../services/appeals.service";

interface AppealArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getAppealsStatistics = createAsyncThunk(
  "appeal/getAppealsStatistics",
  async ({ locale, opt }: AppealArgs, thunkApi) => {
    try {
      const response = await AppealService.getAppealsStatistics(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const appealsCreate = createAsyncThunk(
  "appeal/appealsCreate",
  async (
    { locale, data }: { locale: string | undefined; data?: FormData },
    thunkApi
  ) => {
    try {
      const response = await AppealService.appealsCreate(locale, data);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const appealsCheck = createAsyncThunk(
  "appeal/appealsCheck",
  async (
    { locale, data }: { locale: string | undefined; data?: IAppealsCheck },
    thunkApi
  ) => {
    try {
      const response = await AppealService.appealsCheck(locale, data);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
