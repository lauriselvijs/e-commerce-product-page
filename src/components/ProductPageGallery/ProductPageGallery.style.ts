import styled, { css } from "styled-components/macro";
import { IProductPageGalleryThumbnailStyle } from "./ProductPageGallery.style.d";

export interface IProductPageGalleryFooterStyle {
  width?: string;
  justifyContent?: string;
}

export const ProductPageGalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductPageGalleryImgStyle = styled.img`
  border-radius: 10px;
`;

export const ProductPageGalleryFooterStyle = styled.div<IProductPageGalleryFooterStyle>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: center;

  padding-top: 20px;

  width: ${({ width }) => (width ? width : "100%")};
`;

export const ProductPageGalleryThumbnailStyle = styled.img<IProductPageGalleryThumbnailStyle>`
  border-radius: 10px;

  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.2;
    `}

  :hover {
    ${({ selected }) =>
      !selected &&
      css`
        opacity: 0.6;
      `}
  }
`;

export const ProductPageGalleryThumbnailBtnStyle = styled.button<IProductPageGalleryThumbnailStyle>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryColorVeryLight};

  height: ${({ selected }) => (selected ? "64px" : "63px")};
  width: ${({ selected }) => (selected ? "64px" : "63px")};

  border-radius: 10px;
  ${({ selected }) =>
    selected
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        `
      : css`
          border: none;
        `};

  padding: 0px;
`;
