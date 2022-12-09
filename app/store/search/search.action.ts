import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { IQuery } from "../../models/query.interface";
import { SearchService } from "../../services/search.service";

interface SearchArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  query?: IQuery;
}

export const getSearchResult = createAsyncThunk(
  "search/getSearchResult",
  async ({ locale, opt, query }: SearchArgs, thunkApi) => {
    try {
      const response = await SearchService.getSearchResult(locale, query);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
