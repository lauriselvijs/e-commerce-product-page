import React, { useEffect, useState } from "react";
import FirstProductImage from "../../asset/images/image-product-1.jpg";
import ProductThumbnailGallery from "../ProductThumbnailGallery";
import {
  ProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyle,
} from "../../styles/shared/Gallery.style";
import { ProductPageGalleryStyle } from "./ProductPageGallery.style";
import ProductPageGalleryRightArrowBtn from "../ProductPageGalleryRightArrowBtn";
import ProductPageGalleryLeftArrowBtn from "../ProductPageGalleryLeftArrowBtn";
import { useDetectMobileScreen } from "../../hooks/Screen.hook";

const ProductPageGallery = () => {
  const [showGalleryOverlay, setShowGalleryOverlay] = useState<boolean>(false);
  const [showArrowBtn, setShowArrowBtn] = useState<boolean>(false);

  const onProductPageGalleryImgBtnClick = (): void => {
    setShowGalleryOverlay(!showGalleryOverlay);
  };

  const isMobile = useDetectMobileScreen();

  useEffect(() => {
    isMobile ? setShowArrowBtn(true) : setShowArrowBtn(false);
  }, [isMobile]);

  return (
    <ProductPageGalleryStyle>
      {showArrowBtn && (
        <ProductPageGalleryLeftArrowBtn top={"45%"} left={"5%"} />
      )}
      <ProductPageGalleryImgStyle
        onClick={onProductPageGalleryImgBtnClick}
        width={396}
        height={396}
        src={FirstProductImage}
        alt="Product"
      />
      {showArrowBtn && (
        <ProductPageGalleryRightArrowBtn top={"45%"} left={"85%"} />
      )}
      <ProductPageGalleryFooterStyle>
        <ProductThumbnailGallery />
      </ProductPageGalleryFooterStyle>
    </ProductPageGalleryStyle>
  );
};

export default ProductPageGallery;
