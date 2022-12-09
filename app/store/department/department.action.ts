import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { DepartmentService } from "../../services/department.service";

interface DepartmentArgs {
  locale: string | undefined;
  id?: string | number;
}

export const getDepartmentById = createAsyncThunk(
  "department/getDepartmentById",
  async ({ locale, id }: DepartmentArgs, thunkApi) => {
    try {
      const response = await DepartmentService.getDepartmentById(locale, id);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);

export const getDepartmentList = createAsyncThunk(
  "department/getDepartmentList",
  async ({ locale, id }: DepartmentArgs, thunkApi) => {
    try {
      const response = await DepartmentService.getDepartmentList(locale);
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
