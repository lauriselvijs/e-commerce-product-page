import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  font: {
    familyName: "Kumbh Sans",
    family: "'Kumbh Sans', sans-serif",
    weight: {
      medium: "400",
      bold: "700",
    },
    size: {
      large: "32px",
      medium: "16px",
      small: "12px",
    },
  },
  color: {
    primary: "var(--color-primary)",
    primaryLight: "var(--color-primary-light)",
    primaryVeryLight: "var(--color-primary-very-light)",
    secondary: "var(--color-secondary)",
    secondaryLight: "var(--color-secondary-light)",
    secondaryDark: "var(--color-secondary-dark)",
    secondaryVeryDark: "var(--color-secondary-very-dark)",
    overlay: "var(--overlay)",
    white: "var(--color-white)",
    black: "var(--color-black)",
  },
  media: {
    mobile: {
      maxWidth: "500px",
    },
    tablet: {
      maxWidth: "1300px",
    },
  },
};

export default theme;
