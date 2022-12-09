import { AppState } from "../store";

export const selectLeadership = (state: AppState) => state.leadershipReducer;
