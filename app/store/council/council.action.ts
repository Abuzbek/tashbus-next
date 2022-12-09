import { createAsyncThunk } from "@reduxjs/toolkit";
import { CouncilService } from "../../services/council.service";

interface CouncilArgs {
  locale: string | undefined;
  menu_slug?: string;
}

export const getCouncilByCategory = createAsyncThunk(
  "council/getCouncilByCategory",
  async ({ locale, menu_slug }: CouncilArgs, thunkApi) => {
    try {
      const response = await CouncilService.getCouncilByCategory(
        locale,
        menu_slug
      );
      return response?.data;
    } catch (error) {
      

      return thunkApi.rejectWithValue("Not found or server error");
    }
  }
);
