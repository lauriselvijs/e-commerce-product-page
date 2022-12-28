import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ThemeBtnBtnStyle = styled(SecondaryBtnStyle)`
  background-color: ${({ theme }) => theme.color.primary};
`;
