import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { InformationService } from "../../services/information.service";

interface InforArgs {
  locale: string | undefined;
  data?: FormData;
  id?: string | number;
  opt?: AxiosRequestConfig;
}

export const contactCreateInformation = createAsyncThunk(
  "information/contactCreateInformation",
  async ({ locale, data }: InforArgs, thunkApi) => {
    try {
      const response = await InformationService.contactCreateInformation(
        locale,
        data
      );
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getCorruptionInformation = createAsyncThunk(
  "information/getCorruptionInformation",
  async ({ locale }: InforArgs, thunkApi) => {
    try {
      const response = await InformationService.getCorruptionInformation(
        locale
      );
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getHotlineInformation = createAsyncThunk(
  "information/getHotlineInformation",
  async ({ locale }: InforArgs, thunkApi) => {
    try {
      const response = await InformationService.getHotlineInformation(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getInformationById = createAsyncThunk(
  "information/getInformationById",
  async ({ locale, id }: InforArgs, thunkApi) => {
    try {
      const response = await InformationService.getInformationById(locale, id);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
