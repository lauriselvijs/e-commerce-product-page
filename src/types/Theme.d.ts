import "styled-components";
import { Color } from "./Color";

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
