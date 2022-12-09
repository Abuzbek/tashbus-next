import { AppState } from "../store";

export const selectPrice = (state: AppState) => state.priceReducer;
