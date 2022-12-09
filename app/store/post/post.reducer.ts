import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { getPostByMenuSlug, getPostDetail } from "./post.action";
import { HYDRATE } from "next-redux-wrapper";
import { IListResponse } from "../../models/list.interface";
import { IPost, IPostDetail } from "../../models/post.interface";
interface MenuState {
  posts: IListResponse<IPost[]>;
  detail: IPostDetail | null;
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  posts: {
    meta: null,
    results: [],
  },
  detail: null,
  loading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    /**
     *
     */
    [getPostByMenuSlug.fulfilled.type]: (
      state,
      action: PayloadAction<IListResponse<IPost[]>>
    ) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    },

    [getPostByMenuSlug.pending.type]: (state) => {
      state.loading = true;
    },

    [getPostByMenuSlug.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getPostDetail.fulfilled.type]: (
      state,
      action: PayloadAction<IPostDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.detail = action.payload;
    },

    [getPostDetail.pending.type]: (state) => {
      state.loading = true;
    },

    [getPostDetail.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.postReducer,
      };
    },
  },
});

export default postSlice.reducer;
