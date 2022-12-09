import { AppState } from "../store";

export const selectBus = (state: AppState) => state.busReducer;
