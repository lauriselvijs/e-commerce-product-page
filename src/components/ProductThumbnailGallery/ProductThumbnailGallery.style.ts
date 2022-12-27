import styled, { css } from "styled-components/macro";
import { IProductPageGalleryThumbnailStyle } from "./ProductThumbnailGallery.style.d";

export const ProductPageGalleryThumbnailBtnStyle = styled.button<IProductPageGalleryThumbnailStyle>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.primaryVeryLight};

  height: ${({ selected }) => (selected ? "64px" : "63px")};
  width: ${({ selected }) => (selected ? "64px" : "63px")};

  border-radius: 10px;
  ${({ selected }) =>
    selected
      ? css`
          border: 1px solid ${({ theme }) => theme.color.primary};
        `
      : css`
          border: none;
        `};

  padding: 0px;
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
