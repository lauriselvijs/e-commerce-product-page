import React from "react";
import { IButton } from "../../types/Button";
import { ProductPageGalleryRightArrowBtnStyle } from "./ProductPageGalleryRightArrowBtn.style";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ProductGalleryActions } from "../../store/features/ProductGallery/ProductGallery.slice";
import { useAppDispatch } from "../../hooks/Store.hook";
import { SHOES } from "../../constants/Products.const";

const ProductPageGalleryRightArrowBtn = ({ top, left }: IButton) => {
  const appDispatch = useAppDispatch();
  const { nextImg } = bindActionCreators(ProductGalleryActions, appDispatch);

  const onProductPageGalleryRightArrowBtnClick = () => {
    nextImg(SHOES.product_gallery);
  };

  return (
    <ProductPageGalleryRightArrowBtnStyle
      top={top}
      left={left}
      aria-label="Next image"
      onClick={onProductPageGalleryRightArrowBtnClick}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </ProductPageGalleryRightArrowBtnStyle>
  );
};

export default ProductPageGalleryRightArrowBtn;
