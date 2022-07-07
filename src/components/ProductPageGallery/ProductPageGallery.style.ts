import styled, { css } from "styled-components/macro";
import FirstProductImageThumbnail from "../../asset/images/image-product-1-thumbnail.jpg";

interface IProductPageGalleryThumbnail {
  selected: boolean;
}

export const ProductPageGalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductPageGalleryImg = styled.img`
  border-radius: 10px;
`;

export const ProductPageGalleryFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;

  width: 100%;
`;

export const ProductPageGalleryThumbnail = styled.img<IProductPageGalleryThumbnail>`
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

export const ProductPageGalleryThumbnailBtn = styled.button<IProductPageGalleryThumbnail>`
  cursor: pointer;
  background-color: transparent;

  height: 64px;
  width: 64px;

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
