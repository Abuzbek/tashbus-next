import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { LeadershipService } from "../../services/leadership.service";

interface MenuArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  category?: string | undefined;
  id?: string | number;
}

export const getLeadershipList = createAsyncThunk(
  "leadership/getLeadershipList",
  async ({ locale, opt }: MenuArgs, thunkApi) => {
    try {
      const response = await LeadershipService.getLeadershipList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const getLeadershipByCategory = createAsyncThunk(
  "leadership/getLeadershipByCategory",
  async ({ locale, category }: MenuArgs, thunkApi) => {
    try {
      const response = await LeadershipService.getLeadershipByCategory(
        locale,
        category
      );
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
export const getLeadershipById = createAsyncThunk(
  "leadership/getLeadershipById",
  async ({ locale, id }: MenuArgs, thunkApi) => {
    try {
      const response = await LeadershipService.getLeadershipById(locale, id);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
