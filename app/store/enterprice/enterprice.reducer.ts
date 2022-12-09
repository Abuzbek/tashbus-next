import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IEnterpriceDetail,
  IEnterpriceList,
} from "../../models/enterprice.interface";
import { getEnterpriceList, getEnterpriceById } from "./enterprice.action";
import { HYDRATE } from "next-redux-wrapper";
interface EnterpriceState {
  enterprice_list: IEnterpriceList[];
  enterprice: IEnterpriceDetail | null;
  loading: boolean;
  error: string;
}

const initialState: EnterpriceState = {
  enterprice_list: [],
  enterprice: null,
  loading: false,
  error: "",
};

export const enterpriceSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [getEnterpriceList.fulfilled.type]: (
      state,
      action: PayloadAction<IEnterpriceList[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.enterprice_list = action.payload;
    },

    [getEnterpriceList.pending.type]: (state) => {
      state.loading = true;
    },

    [getEnterpriceList.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getEnterpriceById.fulfilled.type]: (
      state,
      action: PayloadAction<IEnterpriceDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.enterprice = action.payload;
    },

    [getEnterpriceById.pending.type]: (state) => {
      state.loading = true;
    },

    [getEnterpriceById.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.enterpriceReducer,
      };
    },
  },
});

export default enterpriceSlice.reducer;
