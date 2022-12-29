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
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import Layout from "../../pages/shared/Layout";
import { GlobalStyle } from "../../styles/base/Global.style";
import theme from "../../styles/shared/Theme.style";
import FontProvider from "../FontProvider";
import Footer from "../Footer";

const App = () => {
  const {
    font: { familyName, weight },
  } = theme;

  return (
    <FontProvider fontFamilyName={familyName} fontWeight={weight}>
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
