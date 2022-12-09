import { AppState } from "../store";

export const selectPost = (state: AppState) => state.postReducer;
