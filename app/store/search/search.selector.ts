import { AppState } from "../store";

export const selectMenu = (state: AppState) => state.searchReducer;
