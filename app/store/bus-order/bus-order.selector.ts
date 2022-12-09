import { AppState } from "../store";

export const selectBusOrder = (state: AppState) => state.busOrderReducer;
