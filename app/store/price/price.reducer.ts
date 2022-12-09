import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPriceList } from "./price.action";
import { HYDRATE } from "next-redux-wrapper";
import { IPrices } from "../../models/prices.interface";
interface PriceState {
  price_list: IPrices[];
  loading: boolean;
  error: string;
}

const initialState: PriceState = {
  price_list: [],
  loading: false,
  error: "",
};

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
  extraReducers: {
    [getPriceList.fulfilled.type]: (
      state,
      action: PayloadAction<IPrices[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.price_list = action.payload;
    },

    [getPriceList.pending.type]: (state) => {
      state.loading = true;
    },

    [getPriceList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.priceReducer,
      };
    },
  },
});

export default priceSlice.reducer;
