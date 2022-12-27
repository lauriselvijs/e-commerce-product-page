import { useAppDispatch } from "../../hooks/Store.hook";
import { ProductPageGalleryOverlayModalLeftArrowBtnStyle } from "./ProductPageGalleryLeftArrowBtn.style";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ProductGalleryActions } from "../../store/features/ProductGallery/ProductGallery.slice";
import { SHOES } from "../../constants/Products.const";

const ProductPageGalleryLeftArrowBtn = () => {
  const appDispatch = useAppDispatch();
  const { prevImg } = bindActionCreators(ProductGalleryActions, appDispatch);

  const onProductPageGalleryLeftArrowBtn = () => {
    prevImg(SHOES.product_gallery);
  };

  return (
    <ProductPageGalleryOverlayModalLeftArrowBtnStyle
      aria-label="Previous image"
      onClick={onProductPageGalleryLeftArrowBtn}
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
