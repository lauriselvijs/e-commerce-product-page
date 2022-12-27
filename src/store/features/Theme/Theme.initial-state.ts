import { DefaultTheme } from "styled-components";

const initialState: DefaultTheme = {
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
    primary: "hsl(26, 100%, 55%)",
    primaryLight: "hsl(25, 100%, 94%)",
    primaryVeryLight: "hsl(360, 100%, 100%)",
    secondary: "hsl(220, 14%, 75%)",
    secondaryLight: "hsl(223, 64%, 98%)",
    secondaryDark: "hsl(219, 9%, 45%)",
    secondaryVeryDark: "hsl(220, 13%, 13%)",
    overlay: "hsla(0, 0%, 0%, 0.2)",
    white: "hsl(360, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  theme: [
    {
      id: "dark",
      color: {
        primary: "hsl(26, 100%, 20%)",
      },
    },
  ],
  media: {
    mobile: {
      maxWidth: "500px",
    },
    tablet: {
      maxWidth: "1300px",
    },
  },
};

export default initialState;
