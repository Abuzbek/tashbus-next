import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAnswerStatistics, getQuestionList } from "./question.action";
import { HYDRATE } from "next-redux-wrapper";

import {
  IQuestion,
  IQuestionStatistics,
} from "../../models/question.interface";

interface MenuState {
  question_list: IQuestion[];
  question_statistics: IQuestionStatistics[];
  loading: boolean;
  error: string;
}

const initialState: MenuState = {
  question_list: [],
  question_statistics: [],
  loading: false,
  error: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: {
    /**
     *
     */
    [getQuestionList.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestion[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.question_list = action.payload;
    },

    [getQuestionList.pending.type]: (state) => {
      state.loading = true;
    },

    [getQuestionList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getAnswerStatistics.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestionStatistics[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.question_statistics = action.payload;
    },

    [getAnswerStatistics.pending.type]: (state) => {
      state.loading = true;
    },

    [getAnswerStatistics.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.questionReducer,
      };
    },
  },
});

export default questionSlice.reducer;
