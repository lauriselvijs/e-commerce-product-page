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
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      if (
        state.cart.some(
          ({ product_id }) => product_id === action.payload.product_id
        ) &&
        state.productQtyToCart > 0
      ) {
        console.log("has product in cart");
        state.cart = state.cart.map((product) => {
          if (product.product_id === action.payload.product_id) {
            return {
              ...product,
              product_qty:
                action.payload.product_qty + (product.product_qty || 0),
            };
          }

          return product;
        });
      } else if (state.productQtyToCart > 0) {
        state.cart.push(action.payload);
      }
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<IProduct["product_id"]>
    ) => {
      state.cart = state.cart.filter(
        ({ product_id }) => product_id !== action.payload
      );
    },
  },
});

export const CartActions = Cart.actions;
export const CartReducer = Cart.reducer;
export const CartName = Cart.name;
