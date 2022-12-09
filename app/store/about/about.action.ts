import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { AboutService } from "../../services/about.service";

interface AboutArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getAbout = createAsyncThunk(
  "about/getAbout",
  async ({ locale, opt }: AboutArgs, thunkApi) => {
    try {
      const response = await AboutService.getAbout(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getAboutFooter = createAsyncThunk(
  "about/getAboutFooter",
  async ({ locale, opt }: AboutArgs, thunkApi) => {
    try {
      const response = await AboutService.getAboutFooter(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getAboutImages = createAsyncThunk(
  "about/getAboutImages",
  async ({ locale, opt }: AboutArgs, thunkApi) => {
    try {
      const response = await AboutService.getAboutImages(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
