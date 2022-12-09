import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { IQuery } from "../../models/query.interface";
import { GalleryService } from "../../services/gallery.service";

interface GalleryArgs {
  locale: string | undefined;
  query?: IQuery;
  id?: string | number;
}

export const getPhotoGallery = createAsyncThunk(
  "gallery/getPhotoGallery",
  async ({ locale, query }: GalleryArgs, thunkApi) => {
    try {
      const response = await GalleryService.getPhotoGallery(locale, query);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getVideoGallery = createAsyncThunk(
  "gallery/getVideoGallery",
  async ({ locale, query }: GalleryArgs, thunkApi) => {
    try {
      const response = await GalleryService.getVideoGallery(locale, query);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getPhotoGalleryDetail = createAsyncThunk(
  "gallery/getPhotoGalleryDetail",
  async ({ locale, id }: GalleryArgs, thunkApi) => {
    try {
      const response = await GalleryService.getPhotoGalleryDetail(locale, id);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
