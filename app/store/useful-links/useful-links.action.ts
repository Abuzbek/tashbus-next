import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { UsefulLinkService } from "../../services/useful-links.service";

interface UsefulLinksArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getUsefulLinks = createAsyncThunk(
  "useful-links/getUsefulLinks",
  async ({ locale, opt }: UsefulLinksArgs, thunkApi) => {
    try {
      const response = await UsefulLinkService.getUsefulLinks(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
