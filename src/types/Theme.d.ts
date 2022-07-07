import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeId: string;
    font: {
      fontFamilyName: string;
      fontFamily: string;
      fontWeight: {
        fontWeightMedium: string;
        fontWeightBold: string;
      };
    };
    typography: {
      fontSize: {
        fontSizeLarge: string;
        fontSizeMedium: string;
        fontSizeSmall: string;
      };
    };
    colors: {
      primaryColor: string;
      primaryColorLight: string;
      primaryColorVeryLight: string;
      secondaryColor: string;
      secondaryColorLight: string;
      secondaryColorDark: string;
      secondaryColorVeryDark: string;
      white: string;
      black: string;
    };
    media: {
      mobile: {
        maxWidth: string;
      };
    };
  }
}
