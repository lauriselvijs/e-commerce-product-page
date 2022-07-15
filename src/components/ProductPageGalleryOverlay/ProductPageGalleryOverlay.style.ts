import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageGalleryOverlayModalStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const ProductPageGalleryOverlayModalLeftArrowBtnStyle = styled(
  SecondaryBtnStyle
)`
  top: 40%;
  left: -4%;

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ProductPageGalleryOverlayModalRightArrowBtnStyle = styled(
  SecondaryBtnStyle
)`
  top: 40%;
  left: 95%;

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ProductPageGalleryOverlayModalCloseBtnStyle = styled.button`
  position: absolute;

  transform: scale(1.2);

  background-color: transparent;
  border: none;

  top: -6%;
  left: 95%;

  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.colors.primaryColorVeryLight};
  }

  :hover path {
    fill: ${({ theme }) => theme.colors.primaryColor};
  }
`;
