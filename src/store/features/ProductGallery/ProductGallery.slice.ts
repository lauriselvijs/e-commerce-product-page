import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductGallery as IProductGallery } from "./ProductGallery";
import { PRODUCT_GALLERY_SLICE_NAME } from "./ProductGallery.const";
import initialState from "./ProductGallery.initial-state";

export const ProductGallery = createSlice({
  name: PRODUCT_GALLERY_SLICE_NAME,
  initialState,
  reducers: {
    prevImg: (state, action: PayloadAction<IProductGallery["gallery"]>) => {
      for (let index = 0; index < action.payload.length; index++) {
        if (action.payload[index].image === state.currentImg && index >= 1) {
          state.currentImg = action.payload[--index].image;
          break;
        }
      }
    },
    nextImg: (state, action: PayloadAction<IProductGallery["gallery"]>) => {
      for (let index = 0; index < action.payload.length; index++) {
        if (
          action.payload[index].image === state.currentImg &&
          index < action.payload.length - 1
        ) {
          state.currentImg = action.payload[++index].image;
          break;
        }
      }
    },
    setCurrentImg: (
      state,
      action: PayloadAction<IProductGallery["currentImg"]>
    ) => {
      state.currentImg = action.payload;
    },
    openGalleryOverlay: (state) => {
      state.showGalleryOverlay = true;
    },
    closeGalleryOverlay: (state) => {
      state.showGalleryOverlay = false;
    },
  },
});

export const ProductGalleryActions = ProductGallery.actions;
export const ProductGalleryReducer = ProductGallery.reducer;
export const ProductGalleryName = ProductGallery.name;
