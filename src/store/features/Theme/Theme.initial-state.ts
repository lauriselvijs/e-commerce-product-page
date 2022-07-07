import { DefaultTheme } from "styled-components";

const initialState: DefaultTheme = {
  themeId: "",
  font: {
    fontFamilyName: "",
    fontFamily: "",
    fontWeight: {
      fontWeightMedium: "",
      fontWeightBold: "",
    },
  },
  typography: {
    fontSize: {
      fontSizeLarge: "",
      fontSizeMedium: "",
      fontSizeSmall: "",
    },
  },
  colors: {
    primaryColor: "",
    primaryColorLight: "",
    primaryColorVeryLight: "",
    secondaryColor: "",
    secondaryColorLight: "",
    secondaryColorDark: "",
    secondaryColorVeryDark: "",
    white: "",
    black: "",
  },
  media: {
    mobile: {
      maxWidth: "",
    },
  },
};

export default initialState;
