import { ProductPageGalleryRightArrowBtnStyle } from "./ProductPageGalleryRightArrowBtn.style";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  ProductGalleryActions,
  ProductGalleryName,
} from "../../store/features/ProductGallery/ProductGallery.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { SHOES } from "../../constants/Products.const";
import { RootState } from "../../store/app/store";
import { useMemo } from "react";

const ProductPageGalleryRightArrowBtn = () => {
  const appDispatch = useAppDispatch();
  const { nextImg } = bindActionCreators(ProductGalleryActions, appDispatch);
  const { currentImg } = useAppSelector(
    (state: RootState) => state[ProductGalleryName]
  );

  const isLastImage = useMemo(
    () => SHOES.product_gallery.at(-1)?.image === currentImg,
    [currentImg]
  );

  const onProductPageGalleryRightArrowBtnClick = () => {
    nextImg(SHOES.product_gallery);
  };

  return (
    <ProductPageGalleryRightArrowBtnStyle
      aria-label="Next image"
      onClick={onProductPageGalleryRightArrowBtnClick}
      disabled={isLastImage}
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
