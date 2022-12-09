import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { IMeta } from "../../models/meta.interface";
import { IListResponse } from "../../models/list.interface";
import { getDepartmentById, getDepartmentList } from "./department.action";
import { HYDRATE } from "next-redux-wrapper";
import {
  IDepartmentDetail,
  IDepartmentList,
} from "../../models/department.interface";
interface DepartmentState {
  department_list: IDepartmentList[];
  department: IDepartmentDetail | null;
  loading: boolean;
  error: string;
}

const initialState: DepartmentState = {
  department_list: [],
  department: null,
  loading: false,
  error: "",
};

export const departmentSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [getDepartmentList.fulfilled.type]: (
      state,
      action: PayloadAction<IDepartmentList[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.department_list = action.payload;
    },

    [getDepartmentList.pending.type]: (state) => {
      state.loading = true;
    },

    [getDepartmentList.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getDepartmentById.fulfilled.type]: (
      state,
      action: PayloadAction<IDepartmentDetail>
    ) => {
      state.loading = false;
      state.error = "";
      state.department = action.payload;
    },

    [getDepartmentById.pending.type]: (state) => {
      state.loading = true;
    },

    [getDepartmentById.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.departmentReducer,
      };
    },
  },
});

export default departmentSlice.reducer;
