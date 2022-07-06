import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../../hooks/Store.hook";
import { useSetTheme } from "../../hooks/Theme.hook";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import Layout from "../../pages/shared/Layout";
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
        <Router>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route path={"/product-page"} element={<ProductPage />} />
            </Route>
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
