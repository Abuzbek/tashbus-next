import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsefulLinks } from "./useful-links.action";
import { HYDRATE } from "next-redux-wrapper";
import { IService } from "../../models/service.interface";
import { IUsefulLink } from "../../models/useful-link.interface";
interface UsefulLinksState {
  useful_links: IUsefulLink[];
  loading: boolean;
  error: string;
}

const initialState: UsefulLinksState = {
  useful_links: [],
  loading: false,
  error: "",
};

export const usefulLinksSlice = createSlice({
  name: "useful-links",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsefulLinks.fulfilled.type]: (
      state,
      action: PayloadAction<IUsefulLink[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.useful_links = action.payload;
    },

    [getUsefulLinks.pending.type]: (state) => {
      state.loading = true;
    },

    [getUsefulLinks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.usefulLinksReducer,
      };
    },
  },
});

export default usefulLinksSlice.reducer;
