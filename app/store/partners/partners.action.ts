import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { PartnerService } from "../../services/partners.service";

interface PartnersArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
}

export const getPartnerList = createAsyncThunk(
  "partners/getPartnerList",
  async ({ locale, opt }: PartnersArgs, thunkApi) => {
    try {
      const response = await PartnerService.getPartnerList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
