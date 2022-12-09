import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCouncilByCategory } from "./council.action";
import { HYDRATE } from "next-redux-wrapper";
import { ICouncil } from "../../models/council.interface";
interface CouncilState {
  council_list: ICouncil[];
  loading: boolean;
  error: string;
}

const initialState: CouncilState = {
  council_list: [],
  loading: false,
  error: "",
};

export const councilSlice = createSlice({
  name: "council",
  initialState,
  reducers: {},
  extraReducers: {
    [getCouncilByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<ICouncil[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.council_list = action.payload;
    },

    [getCouncilByCategory.pending.type]: (state) => {
      state.loading = true;
    },

    [getCouncilByCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.councilReducer,
      };
    },
  },
});

export default councilSlice.reducer;
