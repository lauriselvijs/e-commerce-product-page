import { combineReducers } from "@reduxjs/toolkit";
import { ThemeReducer, ThemeName } from "../features/Theme/Theme.slice";

const reducers = { [ThemeName]: ThemeReducer };

export const rootReducer = combineReducers(reducers);

export default rootReducer;
