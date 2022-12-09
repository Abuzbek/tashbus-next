import { AppState } from "../store";

export const selectGallery = (state: AppState) => state.galleryReducer;
