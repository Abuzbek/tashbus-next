import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { MenuService } from "../../services/menu.service";

interface MenuArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getAllMenu = createAsyncThunk(
  "menu/getAllMenu",
  async ({ locale, opt }: MenuArgs, thunkApi) => {
    try {
      const response = await MenuService.getAllMenu(locale);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
