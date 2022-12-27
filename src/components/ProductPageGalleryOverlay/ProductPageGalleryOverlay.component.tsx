import {
  ProductPageGalleryOverlayModalStyle,
  ProductPageGalleryOverlayModalCloseBtnStyle,
  ProductPageGalleryImgContainerStyle,
} from "./ProductPageGalleryOverlay.style";
import ProductThumbnailGallery from "../ProductThumbnailGallery";
import {
  ProductPageGalleryFooterStyle,
  ProductPageGalleryImgStyle,
} from "../../styles/shared/Gallery.style";
import { OverlayStyle } from "../../styles/shared/Overlay.style";
import ProductPageGalleryLeftArrowBtn from "../ProductPageGalleryLeftArrowBtn";
import ProductPageGalleryRightArrowBtn from "../ProductPageGalleryRightArrowBtn";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  ProductGalleryActions,
  ProductGalleryName,
} from "../../store/features/ProductGallery/ProductGallery.slice";
import { MouseEventHandler, useRef } from "react";

const ProductPageGalleryOverlay = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideGallery = (
    event: MouseEventHandler<HTMLDivElement>
  ) => {
    // if (
    //   modalRef.current &&
    //   !modalRef.current.contains(event.target)
    // ) {
    //   closeGalleryOverlay();
    // }
    console.log(event);
  };

  const { showGalleryOverlay, currentImg } = useAppSelector(
    (state: RootState) => state[ProductGalleryName]
  );
  const appDispatch = useAppDispatch();
  const { closeGalleryOverlay } = bindActionCreators(
    ProductGalleryActions,
    appDispatch
  );

  const onProductPageGalleryOverlayModalCloseBtnClick = () => {
    closeGalleryOverlay();
  };

  return (
    <OverlayStyle
      selected={showGalleryOverlay}
      onClick={handleClickOutsideGallery}
    >
      <ProductPageGalleryOverlayModalStyle ref={modalRef}>
        <ProductPageGalleryImgContainerStyle>
          <ProductPageGalleryOverlayModalCloseBtnStyle
            aria-label="Close gallery"
            onClick={onProductPageGalleryOverlayModalCloseBtnClick}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </ProductPageGalleryOverlayModalCloseBtnStyle>
          <ProductPageGalleryLeftArrowBtn />
          <ProductPageGalleryImgStyle
            width={476}
            height={476}
            src={currentImg}
            alt="Product"
          />
          <ProductPageGalleryRightArrowBtn />
        </ProductPageGalleryImgContainerStyle>

        <ProductPageGalleryFooterStyle
          galleryFooterWidth={"80%"}
          justifyContent={"space-around"}
        >
          <ProductThumbnailGallery />
        </ProductPageGalleryFooterStyle>
      </ProductPageGalleryOverlayModalStyle>
    </OverlayStyle>
  );
};

export default ProductPageGalleryOverlay;
