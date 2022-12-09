import { AppState } from "../store";

export const selectService = (state: AppState) => state.servicesReducer;
