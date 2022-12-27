import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageGalleryRightArrowBtnStyle = styled(SecondaryBtnStyle)`
  top: 44.5%;
  right: 16px;
  position: absolute;

  &:hover path {
    stroke: ${({ theme }) => theme.color.primary};
  }
`;
