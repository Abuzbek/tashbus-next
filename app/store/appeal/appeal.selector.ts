import { AppState } from "../store";

export const selectAppeal = (state: AppState) => state.appealReducer;
