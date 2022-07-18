import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/Product";
import { CART_SLICE_NAME } from "./Cart.const";
import initialState from "./Cart.initial-state";

export const Cart = createSlice({
  name: CART_SLICE_NAME,
  initialState,
  reducers: {
    incProductQtyToCart: (
      state,
      action: PayloadAction<IProduct["product_qty"]>
    ) => {
      if (action.payload > state.productQtyToCart) {
        state.productQtyToCart = ++state.productQtyToCart;
      }
    },

    decProductQtyToCart: (state) => {
      if (state.productQtyToCart > 0) {
        state.productQtyToCart = --state.productQtyToCart;
      }
    },
  },
});

export const CartActions = Cart.actions;
export const CartReducer = Cart.reducer;
export const CartName = Cart.name;
