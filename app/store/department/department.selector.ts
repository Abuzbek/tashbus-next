import { AppState } from "../store";

export const selectDepartment = (state: AppState) => state.departmentReducer;
