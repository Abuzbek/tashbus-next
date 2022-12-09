import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { EnterpriceService } from "../../services/enterprice.service";

interface EnterpriceArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  id?: string | number;
}

export const getEnterpriceList = createAsyncThunk(
  "enterprice/getEnterpriceList",
  async ({ locale, opt }: EnterpriceArgs, thunkApi) => {
    try {
      const response = await EnterpriceService.getEnterpriceList(locale);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getEnterpriceById = createAsyncThunk(
  "enterprice/getEnterpriceById",
  async ({ locale, id }: EnterpriceArgs, thunkApi) => {
    try {
      const response = await EnterpriceService.getEnterpriceById(locale, id);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
