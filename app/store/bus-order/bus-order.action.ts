import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { BusOrderService } from "../../services/bus-orders.service";

interface BusOrderArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getBusOrder = createAsyncThunk(
  "bus-order/getBusOrder",
  async ({ locale, opt }: BusOrderArgs, thunkApi) => {
    try {
      const response = await BusOrderService.getBusOrder(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const createBusOrder = createAsyncThunk(
  "bus-order/createBusOrder",
  async (
    { locale, data }: { locale: string | undefined; data?: FormData },
    thunkApi
  ) => {
    try {
      const response = await BusOrderService.createBusOrder(locale, data);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
