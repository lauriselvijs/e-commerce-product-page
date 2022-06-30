import React from "react";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../../hooks/Store.hook";
import { useSetTheme } from "../../hooks/Theme.hook";
import { RootState } from "../../store/app/store";
import { ThemeName } from "../../store/features/Theme/Theme.slice";
import { GlobalStyle } from "../../styles/base/Global.style";
import LightTheme from "../../styles/theme/LightTheme";
import FontProvider from "../FontProvider";

const App = () => {
  useSetTheme(LightTheme);

  const theme = useAppSelector((state: RootState) => state[ThemeName]);

  const {
    font: { fontFamilyName, fontWeight },
  } = theme;

  return (
    <FontProvider fontFamilyName={fontFamilyName} fontWeight={fontWeight}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        App
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
