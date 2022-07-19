import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageGalleryOverlayModalLeftArrowBtnStyle = styled(
  SecondaryBtnStyle
)`
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    width: 10%;
    height: 10%;
  }
`;
