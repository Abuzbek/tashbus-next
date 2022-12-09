import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { PriceService } from "../../services/price.service";

interface PriceArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getPriceList = createAsyncThunk(
  "price/getPriceList",
  async ({ locale, opt }: PriceArgs, thunkApi) => {
    try {
      const response = await PriceService.getPriceList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
