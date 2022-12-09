import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { IMeta } from "../../models/meta.interface";
import { IListResponse } from "../../models/list.interface";
import {
  getPhotoGallery,
  getVideoGallery,
  getPhotoGalleryDetail,
} from "./gallery.action";
import { HYDRATE } from "next-redux-wrapper";
import {
  IGalleryPhotoDetail,
  IGalleryPhotoList,
  IGalleryVideoList,
} from "../../models/gallery.interface";

interface MenuState {
  photos: IListResponse<IGalleryPhotoList[]>;
  videos: IListResponse<IGalleryVideoList[]>;
  photoDetail: IGalleryPhotoDetail | null;
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  photos: {
    meta: null,
    results: [],
  },
  videos: {
    meta: null,
    results: [],
  },
  photoDetail: null,
  loading: false,
  error: "",
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: {
    [getPhotoGallery.fulfilled.type]: (
      state,
      action: PayloadAction<IListResponse<IGalleryPhotoList[]>>
    ) => {
      state.loading = false;
      state.error = "";
      state.photos = action.payload;
    },

    [getPhotoGallery.pending.type]: (state) => {
      state.loading = true;
    },

    [getPhotoGallery.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    /**
     *
     */

    [getVideoGallery.fulfilled.type]: (
      state,
      action: PayloadAction<IListResponse<IGalleryVideoList[]>>
    ) => {
      state.loading = false;
      state.error = "";
      state.videos = action.payload;
    },

    [getVideoGallery.pending.type]: (state) => {
      state.loading = true;
    },

    [getVideoGallery.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    /**
     *
     */

    [getPhotoGalleryDetail.fulfilled.type]: (
      state,
      action: PayloadAction<IGalleryPhotoDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.photoDetail = action.payload;
    },

    [getPhotoGalleryDetail.pending.type]: (state) => {
      state.loading = true;
    },

    [getPhotoGalleryDetail.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.galleryReducer,
      };
    },
  },
});

export default gallerySlice.reducer;
