import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/components/Button.style";

export const ProductPageGalleryRightArrowBtnStyle = styled(SecondaryBtnStyle)`
  top: 44.5%;
  right: 16px;
  position: absolute;

  &:disabled {
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:not(:disabled) {
      &:hover path {
        stroke: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
