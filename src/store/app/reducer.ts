import { combineReducers } from "@reduxjs/toolkit";
import {
  HamburgerMenuName,
  HamburgerMenuReducer,
} from "../features/HamburgerMenu/HamburgerMenu.slice";
import { ThemeReducer, ThemeName } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [HamburgerMenuName]: HamburgerMenuReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
