import { bindActionCreators } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { RootState } from "../store/app/store";
import { ThemeActions, ThemeName } from "../store/features/Theme/Theme.slice";
import { useAppDispatch, useAppSelector } from "./Store.hook";

export interface UseTheme {
  setTheme: (theme: string) => void;
}

export const useTheme = (): UseTheme => {
  const appDispatch = useAppDispatch();
  const { themeUpdated } = bindActionCreators(ThemeActions, appDispatch);
  const { themeName: defaultTheme } = useAppSelector(
    (state: RootState) => state[ThemeName]
  );

  useLayoutEffect(() => {
    if (defaultTheme) {
      document.documentElement.className = defaultTheme;
    }
  }, []);

  const setTheme = (themeName: string): void => {
    if (themeName !== defaultTheme && themeName) {
      themeUpdated(themeName);
      document.documentElement.className = themeName;
    } else if (themeName === defaultTheme || !themeName) {
      themeUpdated("");
      document.documentElement.className = "";
    }
  };

  return { setTheme };
};
