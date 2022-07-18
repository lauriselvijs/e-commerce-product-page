import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/Product";
import { PRODUCT_SLICE_NAME } from "./Product.const";
import initialState from "./Product.initial-state";

export const Product = createSlice({
  name: PRODUCT_SLICE_NAME,
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
      // if (
      //   state.some(({ product_id }) => product_id !== action.payload.product_id)
      // ) {
      // }
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<IProduct["product_id"]>
    ) => {
      state = state.filter(({ product_id }) => product_id === action.payload);
    },
  },
});

export const ProductActions = Product.actions;
export const ProductReducer = Product.reducer;
export const ProductName = Product.name;
