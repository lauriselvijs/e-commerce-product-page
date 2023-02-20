import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { ProductPageGalleryOverlayModalLeftArrowBtnStyle } from "./ProductPageGalleryLeftArrowBtn.style";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  ProductGalleryActions,
  ProductGalleryName,
} from "../../store/features/ProductGallery/ProductGallery.slice";
import { SHOES } from "../../constants/Products.const";
import { RootState } from "../../store/app/store";
import { useMemo } from "react";

const ProductPageGalleryLeftArrowBtn = () => {
  const appDispatch = useAppDispatch();
  const { prevImg } = bindActionCreators(ProductGalleryActions, appDispatch);
  const { currentImg } = useAppSelector(
    (state: RootState) => state[ProductGalleryName]
  );

  const isFirstImage = useMemo(
    () => SHOES.product_gallery[0].image === currentImg,
    [currentImg]
  );

  const onProductPageGalleryLeftArrowBtn = () => {
    prevImg(SHOES.product_gallery);
  };

  return (
    <ProductPageGalleryOverlayModalLeftArrowBtnStyle
      aria-label="Previous image"
      onClick={onProductPageGalleryLeftArrowBtn}
      disabled={isFirstImage}
    >
      <svg
        aria-hidden="true"
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </ProductPageGalleryOverlayModalLeftArrowBtnStyle>
  );
};

export default ProductPageGalleryLeftArrowBtn;
