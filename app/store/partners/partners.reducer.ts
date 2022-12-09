import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { getPartnerList } from "./partners.action";
import { HYDRATE } from "next-redux-wrapper";
import { IPartner } from "../../models/partners.interface";
interface MenuState {
  partners: IPartner[];
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  partners: [],
  loading: false,
  error: "",
};

export const partnerSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [getPartnerList.fulfilled.type]: (
      state,
      action: PayloadAction<IPartner[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.partners = action.payload;
    },

    [getPartnerList.pending.type]: (state) => {
      state.loading = true;
    },

    [getPartnerList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.partnersReducer,
      };
    },
  },
});

export default partnerSlice.reducer;
