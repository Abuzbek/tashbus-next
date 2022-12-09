import { AppState } from "../store";

export const selectCouncil = (state: AppState) => state.councilReducer;
