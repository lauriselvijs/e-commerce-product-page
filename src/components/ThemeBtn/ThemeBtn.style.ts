import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";
import { ThemeBtnStyleProps } from "./ThemeBtn.style.d";

export const ThemeBtnStyle = styled(SecondaryBtnStyle)<ThemeBtnStyleProps>`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.color.primary};
`;
