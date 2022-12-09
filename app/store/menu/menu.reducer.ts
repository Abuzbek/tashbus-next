import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { getAllMenu } from "./menu.action";
import { HYDRATE } from "next-redux-wrapper";
interface MenuState {
  menus: IMenu[];
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  menus: [],
  loading: false,
  error: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMenu.fulfilled.type]: (state, action: PayloadAction<IMenu[]>) => {
      state.loading = false;
      state.error = "";
      state.menus = action.payload;
    },

    [getAllMenu.pending.type]: (state) => {
      state.loading = true;
    },

    [getAllMenu.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.menuReducer,
      };
    },
  },
});

export default menuSlice.reducer;
