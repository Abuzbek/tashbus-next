import { AppState } from "../store";

export const selectUsefulLinks = (state: AppState) => state.usefulLinksReducer;
