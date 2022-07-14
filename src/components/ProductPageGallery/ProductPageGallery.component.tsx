import React, { useState } from "react";
import FirstProductImage from "../../asset/images/image-product-1.jpg";
import ProductThumbnailGallery from "../ProductThumbnailGallery";
import {
  ProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyle,
} from "../../styles/shared/Gallery.style";
import { ProductPageGalleryStyle } from "./ProductPageGallery.style";

const ProductPageGallery = () => {
  const [showGalleryOverlay, setShowGalleryOverlay] = useState<boolean>(false);

  const onProductPageGalleryImgBtnClick = (): void => {
    setShowGalleryOverlay(!showGalleryOverlay);
  };

  return (
    <ProductPageGalleryStyle>
      <ProductPageGalleryImgStyle
        onClick={onProductPageGalleryImgBtnClick}
        width={396}
        height={396}
        src={FirstProductImage}
        alt="Product"
      />
      <ProductPageGalleryFooterStyle>
        <ProductThumbnailGallery />
      </ProductPageGalleryFooterStyle>
    </ProductPageGalleryStyle>
  );
};

export default ProductPageGallery;
