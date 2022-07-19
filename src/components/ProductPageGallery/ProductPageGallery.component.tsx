import React, { useEffect, useState } from "react";
import ProductThumbnailGallery from "../ProductThumbnailGallery";
import {
  ProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyle,
} from "../../styles/shared/Gallery.style";
import { ProductPageGalleryStyle } from "./ProductPageGallery.style";
import ProductPageGalleryRightArrowBtn from "../ProductPageGalleryRightArrowBtn";
import ProductPageGalleryLeftArrowBtn from "../ProductPageGalleryLeftArrowBtn";
import { useDetectMobileScreen } from "../../hooks/Screen.hook";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  ProductGalleryActions,
  ProductGalleryName,
} from "../../store/features/ProductGallery/ProductGallery.slice";

const ProductPageGallery = () => {
  const [showArrowBtn, setShowArrowBtn] = useState<boolean>(false);
  const { currentImg } = useAppSelector(
    (state: RootState) => state[ProductGalleryName]
  );
  const appDispatch = useAppDispatch();
  const { openGalleryOverlay, closeGalleryOverlay } = bindActionCreators(
    ProductGalleryActions,
    appDispatch
  );

  const isMobile = useDetectMobileScreen();

  const onProductPageGalleryImgClick = (): void => {
    !isMobile && openGalleryOverlay();
  };

  useEffect(() => {
    isMobile ? setShowArrowBtn(true) : setShowArrowBtn(false);
    isMobile && closeGalleryOverlay();
  }, [isMobile]);

  return (
    <ProductPageGalleryStyle>
      {showArrowBtn && (
        <ProductPageGalleryLeftArrowBtn top={"45%"} left={"5%"} />
      )}
      <ProductPageGalleryImgStyle
        onClick={onProductPageGalleryImgClick}
        width={396}
        height={396}
        src={currentImg}
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
