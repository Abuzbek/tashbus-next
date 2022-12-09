import { AppState } from "../store";

export const selectVacancy = (state: AppState) => state.vacancyReducer;
