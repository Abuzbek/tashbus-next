import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { CardService } from "../../services/card.service";

interface CardArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getCardList = createAsyncThunk(
  "menu/getCardList",
  async ({ locale, opt }: CardArgs, thunkApi) => {
    try {
      const response = await CardService.getCardList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getCardSteps = createAsyncThunk(
  "menu/getCardSteps",
  async ({ locale, opt }: CardArgs, thunkApi) => {
    try {
      const response = await CardService.getCardSteps(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
