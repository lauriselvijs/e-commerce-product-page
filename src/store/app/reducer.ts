import { combineReducers } from "@reduxjs/toolkit";
import { CartName, CartReducer } from "../features/Cart/Cart.slice";
import {
  HamburgerMenuName,
  HamburgerMenuReducer,
} from "../features/HamburgerMenu/HamburgerMenu.slice";
import { ThemeReducer, ThemeName } from "../features/Theme/Theme.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  ProductGalleryName,
  ProductGalleryReducer,
} from "../features/ProductGallery/ProductGallery.slice";

const cartConfig = {
  key: CartName,
  storage,
  blacklist: ["productQtyToCart"],
};

const reducers = {
  [ThemeName]: ThemeReducer,
  [HamburgerMenuName]: HamburgerMenuReducer,
  [ProductGalleryName]: ProductGalleryReducer,
  [CartName]: persistReducer(cartConfig, CartReducer),
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
