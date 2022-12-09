import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getCorruptionInformation,
  getHotlineInformation,
  getInformationById,
} from "./information.action";

import { HYDRATE } from "next-redux-wrapper";

import {
  ICoruptionInformation,
  IHotlineInformation,
  IByCategoryInformation,
} from "../../models/information.interface";

interface MenuState {
  corruption: ICoruptionInformation[];
  hotline: IHotlineInformation[];
  byCategoryInformation: IByCategoryInformation[];
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  corruption: [],
  hotline: [],
  byCategoryInformation: [],
  loading: false,
  error: "",
};

export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {},
  extraReducers: {
    /**
     *
     */
    [getCorruptionInformation.fulfilled.type]: (
      state,
      action: PayloadAction<ICoruptionInformation[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.corruption = action.payload;
    },

    [getCorruptionInformation.pending.type]: (state) => {
      state.loading = true;
    },

    [getCorruptionInformation.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getHotlineInformation.fulfilled.type]: (
      state,
      action: PayloadAction<IHotlineInformation[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.hotline = action.payload;
    },

    [getHotlineInformation.pending.type]: (state) => {
      state.loading = true;
    },

    [getHotlineInformation.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getInformationById.fulfilled.type]: (
      state,
      action: PayloadAction<IByCategoryInformation[]>
    ): void => {
      state.loading = false;
      state.error = "";
      state.byCategoryInformation = action.payload;
    },

    [getInformationById.pending.type]: (state) => {
      state.loading = true;
    },

    [getInformationById.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.informationReducer,
      };
    },
  },
});

export default informationSlice.reducer;
