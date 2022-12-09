import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServiceList } from "./services.action";
import { HYDRATE } from "next-redux-wrapper";
import { IService } from "../../models/service.interface";
interface ServicesState {
  search_result: IService[];
  loading: boolean;
  error: string;
}

const initialState: ServicesState = {
  search_result: [],
  loading: false,
  error: "",
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    [getServiceList.fulfilled.type]: (
      state,
      action: PayloadAction<IService[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.search_result = action.payload;
    },

    [getServiceList.pending.type]: (state) => {
      state.loading = true;
    },

    [getServiceList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.servicesReducer,
      };
    },
  },
});

export default servicesSlice.reducer;
