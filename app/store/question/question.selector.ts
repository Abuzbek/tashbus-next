import { AppState } from "../store";

export const selectQuestion = (state: AppState) => state.questionReducer;
