import "styled-components";

interface Color {
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
    color: Color;
    theme: {
      id: string;
      color: Partial<Color>;
    }[];
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
