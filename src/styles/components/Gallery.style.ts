import styled from "styled-components/macro";
import { motion } from "framer-motion";

import {
  IProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyleProps,
} from "../../types/styles/Gallery.style.d";

export const ProductPageGalleryImgStyle = styled(
  motion.img
).attrs<ProductPageGalleryImgStyleProps>(({ $animateOnExit }) => ({
  initial: { width: 0 },
  animate: { width: "100%" },
  exit: $animateOnExit ? { width: 0 } : false,
}))<ProductPageGalleryImgStyleProps>`
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    border-radius: 0px;
  }
`;

ProductPageGalleryImgStyle.defaultProps = {
  $animateOnExit: false,
};

export const ProductPageGalleryFooterStyle = styled.div<IProductPageGalleryFooterStyle>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-evenly"};
  align-items: center;

  padding-top: 20px;

  width: ${({ galleryFooterWidth }) =>
    galleryFooterWidth ? galleryFooterWidth : "100%"};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: none;
  }
`;
