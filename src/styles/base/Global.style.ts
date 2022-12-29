import { createGlobalStyle, css } from "styled-components";
import { keys } from "../../utils/Object.util";
import { defaultTheme, blueTheme, darkOrangeTheme, themes } from "../theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${defaultTheme.color.primary};;
    --color-primary-light: hsl(25, 100%, 94%);
    --color-primary-very-light: hsl(360, 100%, 100%);
    --color-secondary: hsl(220, 14%, 75%);
    --color-secondary-light: hsl(223, 64%, 98%);
    --color-secondary-dark: hsl(219, 9%, 45%);
    --color-secondary-very-dark: hsl(220, 13%, 13%);
    --overlay: hsla(0, 0%, 0%, 0.2);
    --color-white: hsl(360, 100%, 100%);
    --color-black: hsl(0, 0%, 0%);
  }

  .${blueTheme.name}{
    --color-primary: ${blueTheme.color.primary};
  }

  .${darkOrangeTheme.name}{
    --color-primary: ${darkOrangeTheme.color.primary};
  }

  body {
    background-color: ${({ theme }) => theme.color.white};
    padding: 0px;
    margin: 0px;
    font-family: ${({ theme }) => theme.font.family};
  }

  a {
  -webkit-tap-highlight-color: transparent;
  }

  button {
  -webkit-tap-highlight-color: transparent;
  }
`;
