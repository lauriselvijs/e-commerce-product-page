import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
        background-color: ${({ theme }) => theme.colors.white};
        padding: 0px;
        margin: 0px;
        font-family: ${({ theme }) => theme.font.fontFamily};
    }

  a {
  -webkit-tap-highlight-color: transparent;
  }

  button {
  -webkit-tap-highlight-color: transparent;
  }
`;
