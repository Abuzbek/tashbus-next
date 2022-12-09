import { AppState } from "../store";

export const selectInformation = (state: AppState) => state.informationReducer;
