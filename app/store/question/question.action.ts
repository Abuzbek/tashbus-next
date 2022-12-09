import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { QuestionService } from "../../services/question.service";

interface QuestionArgs {
  locale: string | undefined;
  opt?: AxiosRequestConfig;
  data: FormData;
}

export const getQuestionList = createAsyncThunk(
  "question/getQuestionList",
  async ({ locale, opt }: QuestionArgs, thunkApi) => {
    try {
      const response = await QuestionService.getQuestionList(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getAnswerStatistics = createAsyncThunk(
  "question/getAnswerStatistics",
  async ({ locale, opt }: QuestionArgs, thunkApi) => {
    try {
      const response = await QuestionService.getAnswerStatistics(locale);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const createQuestion = createAsyncThunk(
  "question/createQuestion",
  async ({ locale, opt, data }: QuestionArgs, thunkApi) => {
    try {
      const response = await QuestionService.createQuestion(locale, data);
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
