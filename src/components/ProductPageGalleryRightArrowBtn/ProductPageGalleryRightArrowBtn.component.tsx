import React from "react";
import { IButton } from "../../types/Button";
import { ProductPageGalleryOverlayModalRightArrowBtnStyle } from "./ProductPageGalleryRightArrowBtn.style";

const ProductPageGalleryRightArrowBtn = ({ top, left }: IButton) => {
  const onProductPageGalleryOverlayModalRightArrowBtn = () => {
    console.log("show prev image");
  };

  return (
    <ProductPageGalleryOverlayModalRightArrowBtnStyle
      top={top}
      left={left}
      aria-label="Next image"
      onClick={onProductPageGalleryOverlayModalRightArrowBtn}
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
    </ProductPageGalleryOverlayModalRightArrowBtnStyle>
  );
};

export default ProductPageGalleryRightArrowBtn;
