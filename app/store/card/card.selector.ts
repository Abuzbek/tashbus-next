import { AppState } from "../store";

export const selectCard = (state: AppState) => state.cardReducer;
