import { combineReducers } from "@reduxjs/toolkit";
import { CartName, CartReducer } from "../features/Cart/Cart.slice";
import {
  HamburgerMenuName,
  HamburgerMenuReducer,
} from "../features/HamburgerMenu/HamburgerMenu.slice";
import { ProductName, ProductReducer } from "../features/Product/Product.slice";
import { ThemeReducer, ThemeName } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [HamburgerMenuName]: HamburgerMenuReducer,
  [ProductName]: ProductReducer,
  [CartName]: CartReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
