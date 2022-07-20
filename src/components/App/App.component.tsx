import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SHOES } from "../../constants/Products.const";
import {
  HOME_URL,
  NOT_FOUND_URL,
  PRODUCT_PAGE_URL,
  PRODUCT_PAGE_URL_PARAM,
} from "../../constants/Url.const";
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
import Footer from "../Footer";

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
            <Route path={HOME_URL} element={<Layout />}>
              <Route
                index
                element={
                  <Navigate to={`${PRODUCT_PAGE_URL}/${SHOES.product_id}`} />
                }
              />
              <Route
                path={`${PRODUCT_PAGE_URL}/${PRODUCT_PAGE_URL_PARAM}`}
                element={<ProductPage />}
              />
            </Route>
            <Route path={NOT_FOUND_URL} element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
