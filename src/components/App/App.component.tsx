import { bindActionCreators } from "@reduxjs/toolkit";
import { useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import Layout from "../../pages/shared/Layout";
import { RootState } from "../../store/app/store";
import {
  ThemeActions,
  ThemeName,
} from "../../store/features/Theme/Theme.slice";
import { GlobalStyle } from "../../styles/base/Global.style";
import FontProvider from "../FontProvider";
import Footer from "../Footer";

const darkTheme = {
  colors: {
    primaryColor: "#201106",
    primaryColorLight: "hsl(25, 100%, 94%)",
    primaryColorVeryLight: "hsl(360, 100%, 100%)",
    secondaryColor: "hsl(220, 14%, 75%)",
    secondaryColorLight: "hsl(223, 64%, 98%)",
    secondaryColorDark: "hsl(219, 9%, 45%)",
    secondaryColorVeryDark: "hsl(220, 13%, 13%)",
    overlay: "hsla(0, 0%, 0%, 0.2)",
    white: "hsl(360, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const theme = useAppSelector((state: RootState) => state[ThemeName]);
  const {
    font: { familyName, weight },
  } = theme;

  const appDispatch = useAppDispatch();
  const { themeUpdated } = bindActionCreators(ThemeActions, appDispatch);

  const darkMode = () => {
    console.log("dark mode");

    themeUpdated("dark");

    setIsDarkMode(!isDarkMode);
  };

  return (
    <FontProvider fontFamilyName={familyName} fontWeight={weight}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          {/* <button onClick={darkMode}>Dark Mode</button> */}
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
