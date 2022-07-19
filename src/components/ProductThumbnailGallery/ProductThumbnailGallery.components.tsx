import React, { useEffect } from "react";
import {
  ProductPageGalleryThumbnailBtnStyle,
  ProductPageGalleryThumbnailStyle,
} from "./ProductThumbnailGallery.style";
import { SHOES } from "../../constants/Products.const";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  ProductGalleryActions,
  ProductGalleryName,
} from "../../store/features/ProductGallery/ProductGallery.slice";
import { RootState } from "../../store/app/store";

const ProductThumbnailGallery = () => {
  const appDispatch = useAppDispatch();
  const { setCurrentImg } = bindActionCreators(
    ProductGalleryActions,
    appDispatch
  );
  const { currentImg } = useAppSelector(
    (state: RootState) => state[ProductGalleryName]
  );

  useEffect(() => {
    setCurrentImg(SHOES.product_gallery[0].image);
  }, []);

  const onProductPageGalleryThumbnailBtnClick = (image: string): void => {
    setCurrentImg(image);
  };

  const productThumbnailGallery = SHOES.product_gallery.map(
    ({ thumbnail, image }) => (
      <ProductPageGalleryThumbnailBtnStyle
        selected={image === currentImg}
        onClick={() => onProductPageGalleryThumbnailBtnClick(image)}
        key={thumbnail}
      >
        <ProductPageGalleryThumbnailStyle
          selected={image === currentImg}
          width={63}
          height={63}
          src={thumbnail}
          alt="Product thumbnail"
        />
      </ProductPageGalleryThumbnailBtnStyle>
    )
  );

  return <>{productThumbnailGallery}</>;
};

export default ProductThumbnailGallery;
