import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductGallery } from "./ProductGallery";
import { PRODUCT_GALLERY_SLICE_NAME } from "./ProductGallery.const";
import initialState from "./ProductGallery.initial-state";

export const ProductGallery = createSlice({
  name: PRODUCT_GALLERY_SLICE_NAME,
  initialState,
  reducers: {
    prevImg: (state, action: PayloadAction<IProductGallery["gallery"]>) => {},
    nextImg: (state, action: PayloadAction<IProductGallery["gallery"]>) => {},
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
