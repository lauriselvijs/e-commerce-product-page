import styled from "styled-components/macro";
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
  // TODO:
  // [] - add theme.colors hsla for overlay
  background-color: hsla(0, 0%, 0%, 0.8);
`;

export const ProductPageGalleryOverlayModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
