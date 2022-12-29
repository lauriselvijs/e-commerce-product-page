import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageGalleryOverlayModalLeftArrowBtnStyle = styled(
  SecondaryBtnStyle
)`
  // margin-right: 80%;
  top: 44.5%;
  left: 16px;
  position: absolute;

  &:hover path {
    stroke: ${({ theme }) => theme.color.primary};
  }
`;
