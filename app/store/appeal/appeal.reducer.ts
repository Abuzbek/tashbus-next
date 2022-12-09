/* getAbout
getAboutFooter
getAboutImages */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  appealsCheck,
  appealsCreate,
  getAppealsStatistics,
} from "./appeal.action";

import { HYDRATE } from "next-redux-wrapper";

import {
  IAppealsResBody,
  IAppealsStatistics,
} from "../../models/appeals.interface";

interface AppealState {
  statistics: IAppealsStatistics | null;
  appealsBody: IAppealsResBody[] | null;
  appealsCheck: any;
  loading: boolean;
  error: string;
}

const initialState: AppealState = {
  statistics: null,
  appealsBody: null,
  appealsCheck: null,
  loading: false,
  error: "",
};

export const appealSlice = createSlice({
  name: "appeal",
  initialState,
  reducers: {},
  extraReducers: {
    // post check
    [appealsCheck.fulfilled.type]: (
      state,
      action: PayloadAction<IAppealsResBody[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.appealsBody = action.payload;
    },

    [appealsCheck.pending.type]: (state) => {
      state.loading = true;
    },

    [appealsCheck.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // post check

    // post create

    [appealsCreate.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = "";
      state.appealsBody = action.payload;
    },

    [appealsCreate.pending.type]: (state) => {
      state.loading = true;
    },

    [appealsCreate.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // post create

    // get statistics

    [getAppealsStatistics.fulfilled.type]: (
      state,
      action: PayloadAction<IAppealsStatistics>
    ) => {
      state.loading = false;
      state.error = "";
      state.statistics = action.payload;
    },

    [getAppealsStatistics.pending.type]: (state) => {
      state.loading = true;
    },

    [getAppealsStatistics.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get statistics

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.appealReducer,
      };
    },
  },
});

export default appealSlice.reducer;
