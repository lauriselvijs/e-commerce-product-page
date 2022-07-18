import React from "react";
import { IButton } from "../../types/Button.d";
import { ProductPageGalleryOverlayModalLeftArrowBtnStyle } from "./ProductPageGalleryLeftArrowBtn.style";

const ProductPageGalleryLeftArrowBtn = ({ top, left }: IButton) => {
  const onProductPageGalleryOverlayModalLeftArrowBtn = () => {
    console.log("show prev image");
  };

  return (
    <ProductPageGalleryOverlayModalLeftArrowBtnStyle
      top={top}
      left={left}
      aria-label="Previous image"
      onClick={onProductPageGalleryOverlayModalLeftArrowBtn}
    >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
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
