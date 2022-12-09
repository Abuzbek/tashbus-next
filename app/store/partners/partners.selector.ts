import { AppState } from "../store";

export const selectPartner = (state: AppState) => state.partnersReducer;
