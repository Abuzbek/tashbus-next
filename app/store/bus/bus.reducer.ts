/* getAbout
getAboutFooter
getAboutImages */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getBusByCategory, getBusDetail, getBusCategory } from "./bus.action";

import { HYDRATE } from "next-redux-wrapper";

import { IBusCategory, IBusDetail, IBusList } from "../../models/bus.interface";

import { IListResponse } from "../../models/list.interface";

interface BusState {
  categories: IBusCategory[];
  bus_list: IListResponse<IBusList[]>;
  bus_detail: IBusDetail | null;
  loading: boolean;
  error: string;
}

const initialState: BusState = {
  categories: [],
  bus_list: {
    meta: null,
    results: [],
  },
  bus_detail: null,
  loading: false,
  error: "",
};

export const busSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: {
    // get Bus categories
    [getBusCategory.fulfilled.type]: (
      state,
      action: PayloadAction<IBusCategory[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.categories = action.payload;
    },

    [getBusCategory.pending.type]: (state) => {
      state.loading = true;
    },

    [getBusCategory.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get Bus categories

    // get by category bus list

    [getBusByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<IListResponse<IBusList[]>>
    ) => {
      state.loading = false;
      state.error = "";
      state.bus_list = action.payload;
    },

    [getBusByCategory.pending.type]: (state) => {
      state.loading = true;
    },

    [getBusByCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get by category bus list

    // get category detail

    [getBusDetail.fulfilled.type]: (
      state,
      action: PayloadAction<IBusDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.bus_detail = action.payload;
    },

    [getBusDetail.pending.type]: (state) => {
      state.loading = true;
    },

    [getBusDetail.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get category detail

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.busReducer,
      };
    },
  },
});

export default busSlice.reducer;
