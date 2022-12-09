/* getAbout
getAboutFooter
getAboutImages */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createBusOrder, getBusOrder } from "./bus-order.action";

import { HYDRATE } from "next-redux-wrapper";

import { IBusOrder } from "../../models/bus-orders.interface";

interface BusOrderState {
  order_list: IBusOrder[] | null;
  loading: boolean;
  error: string;
}

const initialState: BusOrderState = {
  order_list: [],
  loading: false,
  error: "",
};

export const busOrderSlice = createSlice({
  name: "bus-order",
  initialState,
  reducers: {},
  extraReducers: {
    // get
    [getBusOrder.fulfilled.type]: (
      state,
      action: PayloadAction<IBusOrder[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.order_list = action.payload;
    },

    [getBusOrder.pending.type]: (state) => {
      state.loading = true;
    },

    [getBusOrder.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get

    // post create

    [createBusOrder.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = "";
    },

    [createBusOrder.pending.type]: (state) => {
      state.loading = true;
    },

    [createBusOrder.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // post create

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.busOrderReducer,
      };
    },
  },
});

export default busOrderSlice.reducer;
