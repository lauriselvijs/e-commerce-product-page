import React from "react";
import {
  ProductPageGalleryOverlayModalLeftArrowBtnStyle,
  ProductPageGalleryOverlayModalRightArrowBtnStyle,
  ProductPageGalleryOverlayModalStyle,
  ProductPageGalleryOverlayModalCloseBtnStyle,
} from "./ProductPageGalleryOverlay.style";
import FirstProductImage from "../../asset/images/image-product-1.jpg";
import ProductThumbnailGallery from "../ProductThumbnailGallery";
import {
  ProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyle,
} from "../../styles/shared/Gallery.style";
import { OverlayStyle } from "../../styles/shared/Overlay.style";

const ProductPageGalleryOverlay = () => {
  const onProductPageGalleryOverlayModalLeftArrowBtn = () => {
    console.log("show prev image");
  };

  const onProductPageGalleryOverlayModalRightArrowBtn = () => {
    console.log("show next image");
  };

  return (
    <OverlayStyle selected={false}>
      <ProductPageGalleryOverlayModalStyle>
        <ProductPageGalleryOverlayModalCloseBtnStyle aria-label="Close gallery">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </ProductPageGalleryOverlayModalCloseBtnStyle>
        <ProductPageGalleryOverlayModalLeftArrowBtnStyle
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
        <ProductPageGalleryImgStyle
          width={476}
          height={476}
          src={FirstProductImage}
          alt="Product"
        />
        <ProductPageGalleryOverlayModalRightArrowBtnStyle
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

        <ProductPageGalleryFooterStyle
          width={"80%"}
          justifyContent={"space-around"}
        >
          <ProductThumbnailGallery />
        </ProductPageGalleryFooterStyle>
      </ProductPageGalleryOverlayModalStyle>
    </OverlayStyle>
  );
};

export default ProductPageGalleryOverlay;
