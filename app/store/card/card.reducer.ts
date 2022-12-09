import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "../../models/menu.interface";
import { getCardList, getCardSteps } from "./card.action";
import { HYDRATE } from "next-redux-wrapper";
import { ICard, ICardStep } from "../../models/cards.interface";
interface CardState {
  card_list: ICard[];
  card_steps: ICardStep[];
  loading: boolean;
  error: string;
}

const initialState: CardState = {
  card_list: [],
  card_steps: [],
  loading: false,
  error: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: {
    // get card list
    [getCardList.fulfilled.type]: (state, action: PayloadAction<ICard[]>) => {
      state.loading = false;
      state.error = "";
      state.card_list = action.payload;
    },

    [getCardList.pending.type]: (state) => {
      state.loading = true;
    },

    [getCardList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get card list

    // get card step
    [getCardSteps.fulfilled.type]: (
      state,
      action: PayloadAction<ICardStep[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.card_steps = action.payload;
    },

    [getCardSteps.pending.type]: (state) => {
      state.loading = true;
    },

    [getCardSteps.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get card step

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cardReducer,
      };
    },
  },
});

export default cardSlice.reducer;
