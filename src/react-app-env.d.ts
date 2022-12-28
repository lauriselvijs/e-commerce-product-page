/// <reference types="react-scripts" />
import "styled-components";

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      familyName: string;
      family: string;
      weight: {
        medium: string;
        bold: string;
      };
      size: {
        large: string;
        medium: string;
        small: string;
      };
    };
    color: {
      primary: string;
      primaryLight: string;
      primaryVeryLight: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      secondaryVeryDark: string;
      overlay: string;
      white: string;
      black: string;
    };
    media: {
      mobile: {
        maxWidth: string;
      };
      tablet: {
        maxWidth: string;
      };
    };
  }
}
