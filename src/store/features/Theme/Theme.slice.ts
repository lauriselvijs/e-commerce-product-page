import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { THEME_SLICE_NAME } from "./Theme.const";
import initialState from "./Theme.initial-state";

export const Theme = createSlice({
  name: THEME_SLICE_NAME,
  initialState,
  reducers: {
    themeUpdated: (state, { payload: id }: PayloadAction<string>) => {
      // if (!colors) {
      //   state.colors = initialState.colors;
      // } else if (colors) {
      //   state.colors = colors;
      // }
    },
  },
});

export const ThemeActions = Theme.actions;
export const ThemeReducer = Theme.reducer;
export const ThemeName = Theme.name;
