import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageGalleryRightArrowBtnStyle = styled(SecondaryBtnStyle)`
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }
`;
