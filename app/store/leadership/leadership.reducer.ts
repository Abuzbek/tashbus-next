import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import {
  getLeadershipList,
  getLeadershipByCategory,
  getLeadershipById,
} from "./leadership.action";
import { HYDRATE } from "next-redux-wrapper";
import {
  ILeadership,
  ILeadershipByCategory,
  ILeadershipDetail,
} from "../../models/leadership.interface";

interface MenuState {
  leadership_list: ILeadership[];
  leadership_by_category: ILeadershipByCategory | null;
  leadership_detail: ILeadershipDetail | null;
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  leadership_list: [],
  leadership_by_category: null,
  leadership_detail: null,
  loading: false,
  error: "",
};

export const leadershipSlice = createSlice({
  name: "leadership",
  initialState,
  reducers: {},
  extraReducers: {
    /**
     *
     */
    [getLeadershipList.fulfilled.type]: (
      state,
      action: PayloadAction<ILeadership[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.leadership_list = action.payload;
    },

    [getLeadershipList.pending.type]: (state) => {
      state.loading = true;
    },

    [getLeadershipList.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getLeadershipByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<ILeadershipByCategory>
    ) => {
      state.loading = false;
      state.error = "";
      state.leadership_by_category = action.payload;
    },

    [getLeadershipByCategory.pending.type]: (state) => {
      state.loading = true;
    },

    [getLeadershipByCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getLeadershipById.fulfilled.type]: (
      state,
      action: PayloadAction<ILeadershipDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.leadership_detail = action.payload;
    },

    [getLeadershipById.pending.type]: (state) => {
      state.loading = true;
    },

    [getLeadershipById.rejected.type]: (
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
        ...action.payload.leadershipReducer,
      };
    },
  },
});

export default leadershipSlice.reducer;
