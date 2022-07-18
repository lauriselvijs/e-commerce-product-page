import { createSlice } from "@reduxjs/toolkit";
import { HAMBURGER_MENU_SLICE_NAME } from "./HamburgerMenu.const";
import initialState from "./HamburgerMenu.initial-state";

export const HamburgerMenu = createSlice({
  name: HAMBURGER_MENU_SLICE_NAME,
  initialState,
  reducers: {
    showHamburgerMenu: (state) => {
      state.showHamburgerMenu = true;
    },
    closeHamburgerMenu: (state) => {
      state.showHamburgerMenu = false;
    },
  },
});

export const HamburgerMenuActions = HamburgerMenu.actions;
export const HamburgerMenuReducer = HamburgerMenu.reducer;
export const HamburgerMenuName = HamburgerMenu.name;
