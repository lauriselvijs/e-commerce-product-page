import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: hsl(26, 100%, 55%);
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

  .dark-theme{
    --color-primary: hsl(26, 100%, 20%);
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
