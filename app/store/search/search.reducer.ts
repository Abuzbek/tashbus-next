import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSearchResult } from "./search.action";
import { HYDRATE } from "next-redux-wrapper";
import { IListResponse } from "../../models/list.interface";
import { ISearch } from "../../models/search.interface";
interface SearchState {
  search_result: IListResponse<ISearch[]>;
  loading: boolean;
  error: string;
}

const initialState: SearchState = {
  search_result: {
    meta: null,
    results: [],
  },
  loading: false,
  error: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchResult.fulfilled.type]: (
      state,
      action: PayloadAction<IListResponse<ISearch[]>>
    ) => {
      state.loading = false;
      state.error = "";
      state.search_result = action.payload;
    },

    [getSearchResult.pending.type]: (state) => {
      state.loading = true;
    },

    [getSearchResult.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.searchReducer,
      };
    },
  },
});

export default searchSlice.reducer;
