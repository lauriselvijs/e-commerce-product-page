import styled from "styled-components/macro";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";
import { IProductPageGalleryOverlayStyle } from "./ProductPageGalleryOverlay.style.d";

export const ProductPageGalleryOverlayStyle = styled.div<IProductPageGalleryOverlayStyle>`
  display: ${({ selected }) => (selected ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: ${({ theme }) => theme.colors.overlayColor};
`;

export const ProductPageGalleryOverlayModalStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const ProductPageGalleryOverlayModalLeftArrowBtn = styled(
  SecondaryBtnStyle
)`
  top: 40%;
  left: -4%;

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ProductPageGalleryOverlayModalRightArrowBtn = styled(
  SecondaryBtnStyle
)`
  top: 40%;
  left: 95%;

  :hover path {
    stroke: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ProductPageGalleryOverlayModalCloseBtn = styled.button`
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
