import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { ServicesService } from "../../services/services.service";

interface ServicesArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getServiceList = createAsyncThunk(
  "services/getServiceList",
  async ({ locale, opt }: ServicesArgs, thunkApi) => {
    try {
      const response = await ServicesService.getServiceList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
