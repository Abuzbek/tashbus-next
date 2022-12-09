import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { IQuery } from "../../models/query.interface";
import { PostService } from "../../services/post.service";

interface PostArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  query?: IQuery;
  slug?: string | undefined;
}

export const getPostByMenuSlug = createAsyncThunk(
  "post/getPostByMenuSlug",
  async ({ locale, opt, query }: PostArgs, thunkApi) => {
    try {
      const response = await PostService.getPostByMenuSlug(locale, query);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getPostDetail = createAsyncThunk(
  "post/getPostDetail",
  async ({ locale, opt, slug }: PostArgs, thunkApi) => {
    try {
      const response = await PostService.getPostDetail(locale, slug);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
