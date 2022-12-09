import { AppState } from "../store";

export const selectAbout = (state: AppState) => state.aboutReducer;
