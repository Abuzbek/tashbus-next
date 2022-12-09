import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { IQuery } from "../../models/query.interface";
import { BusService } from "../../services/bus.service";

interface BusArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getBusCategory = createAsyncThunk(
  "bus/getBusCategory",
  async ({ locale, opt }: BusArgs, thunkApi) => {
    try {
      const response = await BusService.getBusCategory(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const getBusByCategory = createAsyncThunk(
  "bus/getBusByCategory",
  async (
    { locale, query }: { locale: string | undefined; query?: IQuery },
    thunkApi
  ) => {
    try {
      const response = await BusService.getBusByCategory(locale, query);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const getBusDetail = createAsyncThunk(
  "bus/getBusDetail",
  async (
    { locale, slug }: { locale: string | undefined; slug?: string | undefined },
    thunkApi
  ) => {
    try {
      const response = await BusService.getBusDetail(locale, slug);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
