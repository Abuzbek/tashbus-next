import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVacancyByCategory, getVacancyDetail } from "./vacancy.action";
import { HYDRATE } from "next-redux-wrapper";
import { IVacancy, IVacancyDetail } from "../../models/vacancy.interface";

interface VacancyState {
  vacancy_list: IVacancy[];
  vacancy_detail: IVacancyDetail | null;
  loading: boolean;
  error: string;
}

const initialState: VacancyState = {
  vacancy_list: [],
  vacancy_detail: null,
  loading: false,
  error: "",
};

export const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {},
  extraReducers: {
    /**
     *
     */
    [getVacancyByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<IVacancy[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.vacancy_list = action.payload;
    },

    [getVacancyByCategory.pending.type]: (state) => {
      state.loading = true;
    },

    [getVacancyByCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     *
     */
    [getVacancyDetail.fulfilled.type]: (
      state,
      action: PayloadAction<IVacancyDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.vacancy_detail = action.payload;
    },

    [getVacancyDetail.pending.type]: (state) => {
      state.loading = true;
    },

    [getVacancyDetail.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.vacancyReducer,
      };
    },
  },
});

export default vacancySlice.reducer;
