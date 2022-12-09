/* getAbout
getAboutFooter
getAboutImages */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAbout, getAboutFooter, getAboutImages } from "./about.action";

import { HYDRATE } from "next-redux-wrapper";

import {
  IAbout,
  IAboutFooter,
  IAboutImages,
} from "../../models/about.interface";

interface AboutState {
  about: IAbout | null;
  images: IAboutImages[];
  footer: IAboutFooter | null;
  loading: boolean;
  error: string;
}

const initialState: AboutState = {
  about: null,
  images: [],
  footer: null,
  loading: false,
  error: "",
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: {
    
    // get about 

    [getAbout.fulfilled.type]: (state, action: PayloadAction<IAbout>) => {
      state.loading = false;
      state.error = "";
      state.about = action.payload;
    },

    [getAbout.pending.type]: (state) => {
      state.loading = true;
    },

    [getAbout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get about 

    // get about footer

    [getAboutFooter.fulfilled.type]: (
      state,
      action: PayloadAction<IAboutFooter>
    ) => {
      state.loading = false;
      state.error = "";
      state.footer = action.payload;
    },

    [getAboutFooter.pending.type]: (state) => {
      state.loading = true;
    },

    [getAboutFooter.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get about footer

    // get about images


    [getAboutImages.fulfilled.type]: (
      state,
      action: PayloadAction<IAboutImages[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.images = action.payload;
    },

    [getAboutImages.pending.type]: (state) => {
      state.loading = true;
    },

    [getAboutImages.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get about images

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.aboutReducer,
      };
    },
  },
});

export default aboutSlice.reducer;
