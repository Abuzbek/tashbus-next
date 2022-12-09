import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { ErrorsCreateService } from "../../services/errors.create.service";

interface ErrorsArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  data?: FormData;
}

export const sendError = createAsyncThunk(
  "errors/sendError",
  async ({ locale, data }: ErrorsArgs, thunkApi) => {
    try {
      const response = await ErrorsCreateService.sendError(locale, data);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
