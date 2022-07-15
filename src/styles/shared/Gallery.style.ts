import styled from "styled-components/macro";
import { IProductPageGalleryFooterStyle } from "../../types/Gallery.style.d";

export const ProductPageGalleryImgStyle = styled.img`
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    border-radius: 0px;
  }
`;

export const ProductPageGalleryFooterStyle = styled.div<IProductPageGalleryFooterStyle>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: center;

  padding-top: 20px;

  width: ${({ width }) => (width ? width : "100%")};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: none;
  }
`;
