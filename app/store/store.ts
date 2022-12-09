import {
  configureStore,
  ThunkAction,
  combineReducers,
  Action,
} from "@reduxjs/toolkit";
import menuReducer from "./menu/menu.reducer";
import aboutReducer from "./about/about.reducer";
import appealReducer from "./appeal/appeal.reducer";
import busOrderReducer from "./bus-order/bus-order.reducer";
import busReducer from "./bus/bus.reducer";
import cardReducer from "./card/card.reducer";
import councilReducer from "./council/council.reducer";
import departmentReducer from "./department/department.reducer";
import enterpriceReducer from "./enterprice/enterprice.reducer";
import galleryReducer from "./gallery/gallery.reducer";
import informationReducer from "./information/information.reducer";
import leadershipReducer from "./leadership/leadership.reducer";
import partnersReducer from "./partners/partners.reducer";
import postReducer from "./post/post.reducer";
import priceReducer from "./price/price.reducer";
import questionReducer from "./question/question.reducer";
import searchReducer from "./search/search.reducer";
import servicesReducer from "./services/services.reducer";
import usefulLinksReducer from "./useful-links/useful-links.reducer";
import vacancyReducer from "./vacancy/vacancy.reducer";
import { createWrapper } from "next-redux-wrapper";

const reducers = combineReducers({
  menuReducer,
  aboutReducer,
  appealReducer,
  busOrderReducer,
  busReducer,
  cardReducer,
  councilReducer,
  departmentReducer,
  enterpriceReducer,
  galleryReducer,
  informationReducer,
  leadershipReducer,
  partnersReducer,
  postReducer,
  priceReducer,
  questionReducer,
  searchReducer,
  servicesReducer,
  usefulLinksReducer,
  vacancyReducer
});

export const store = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
  });

export type TypeRootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);
