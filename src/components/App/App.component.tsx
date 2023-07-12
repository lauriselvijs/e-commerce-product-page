import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../styles/base/Global.style";
import FontProvider from "../FontProvider";
import theme from "../../config/Theme";
import Router from "../../config/Router";

const App = () => {
  const {
    font: { familyName, weight },
  } = theme;

  return (
    <FontProvider fontFamilyName={familyName} fontWeight={weight}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </FontProvider>
  );
};

export default App;
