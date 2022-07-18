import React from "react";
import {
  ProductPageAddToCartBtnStyle,
  ProductPageMainInfoSectionStyle,
  ProductPageProductCompanyStyle,
  ProductPageProductDescFooterStyle,
  ProductPageProductDescStyle,
  ProductPageProductDiscPriceStyle,
  ProductPageProductInfoStyle,
  ProductPageProductNameStyle,
  ProductPageProductPriceContainerStyle,
  ProductPageProductPriceDiscPercentageBadgeStyle,
  ProductPageProductRealPriceStyle,
  ProductPageQuantityBtnContainerStyle,
  ProductPageQuantityDecIconStyle,
  ProductPageQuantityIncIconStyle,
  ProductPageQuantityIncBtnStyle,
  ProductPageQuantityDecBtnStyle,
} from "./ProductPageProductDesc.styled";
import PlusIcon from "../../asset/images/icons/icon-plus.svg";
import MinusIcon from "../../asset/images/icons/icon-minus.svg";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { ProductActions } from "../../store/features/Product/Product.slice";
import { CartActions, CartName } from "../../store/features/Cart/Cart.slice";
import { RootState } from "../../store/app/store";

import FirstProductImage from "../../asset/images/image-product-1.jpg";
import SecondProductImage from "../../asset/images/image-product-2.jpg";
import ThirdProductImage from "../../asset/images/image-product-3.jpg";
import FourthProductImage from "../../asset/images/image-product-4.jpg";

import FirstProductImageThumbnail from "../../asset/images/image-product-1-thumbnail.jpg";
import SecondProductImageThumbnail from "../../asset/images/image-product-2-thumbnail.jpg";
import ThirdProductImageThumbnail from "../../asset/images/image-product-3-thumbnail.jpg";
import FourthProductImageThumbnail from "../../asset/images/image-product-4-thumbnail.jpg";

const SHOES = {
  product_id: "shoes",
  product_company: "SNEAKER COMPANY",
  product_name: "Fall Limited Edition Sneakers",
  product_desc: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they'll withstand everything
  the weather can offer.`,
  product_price: 250.0,
  product_currency: "$",
  product_disc: 0.5,
  product_price_with_disc: 125.0,
  product_qty: 10,
  product_gallery: [
    { image: FirstProductImage, thumbnail: FirstProductImageThumbnail },
    { image: SecondProductImage, thumbnail: SecondProductImageThumbnail },
    { image: ThirdProductImage, thumbnail: ThirdProductImageThumbnail },
    { image: FourthProductImage, thumbnail: FourthProductImageThumbnail },
  ],
  product_attr: null,
};

const ProductPageProductDesc = () => {
  const appDispatch = useAppDispatch();
  const { incProductQtyToCart, decProductQtyToCart } = bindActionCreators(
    CartActions,
    appDispatch
  );
  const { addProductToCart } = bindActionCreators(ProductActions, appDispatch);
  const { productQtyToCart } = useAppSelector(
    (state: RootState) => state[CartName]
  );

  const onProductPageQuantityIncBtnClick = () => {
    incProductQtyToCart(SHOES.product_qty);
  };

  const onProductPageQuantityDecBtnClick = () => {
    decProductQtyToCart();
  };

  const onProductPageAddToCartBtnClick = () => {
    SHOES["product_qty"] = productQtyToCart;
    addProductToCart(SHOES);
  };

  return (
    <ProductPageProductDescStyle>
      <ProductPageProductCompanyStyle>
        {SHOES.product_company}
      </ProductPageProductCompanyStyle>
      <ProductPageMainInfoSectionStyle>
        <ProductPageProductNameStyle>
          {SHOES.product_name}
        </ProductPageProductNameStyle>
        <ProductPageProductInfoStyle>
          {SHOES.product_desc}
        </ProductPageProductInfoStyle>
      </ProductPageMainInfoSectionStyle>
      <ProductPageProductPriceContainerStyle>
        <ProductPageProductDiscPriceStyle>
          {/* FIXME: need correct formatting for numbers */}
          {SHOES.product_currency}
          {SHOES.product_price_with_disc}
          <ProductPageProductPriceDiscPercentageBadgeStyle>
            {SHOES.product_disc * 100}%
          </ProductPageProductPriceDiscPercentageBadgeStyle>
        </ProductPageProductDiscPriceStyle>
        <ProductPageProductRealPriceStyle>
          {SHOES.product_price}
        </ProductPageProductRealPriceStyle>
      </ProductPageProductPriceContainerStyle>
      <ProductPageProductDescFooterStyle>
        <ProductPageQuantityBtnContainerStyle>
          <ProductPageQuantityIncBtnStyle
            onClick={onProductPageQuantityDecBtnClick}
          >
            <ProductPageQuantityDecIconStyle
              width={12}
              height={4}
              src={MinusIcon}
              alt="Decrease quantity"
            />
          </ProductPageQuantityIncBtnStyle>{" "}
          {productQtyToCart}{" "}
          <ProductPageQuantityDecBtnStyle
            onClick={onProductPageQuantityIncBtnClick}
          >
            <ProductPageQuantityIncIconStyle
              width={12}
              height={12}
              src={PlusIcon}
              alt="Increase quantity"
            />
          </ProductPageQuantityDecBtnStyle>
        </ProductPageQuantityBtnContainerStyle>
        <ProductPageAddToCartBtnStyle
          onClick={onProductPageAddToCartBtnClick}
          arial-label="Add item to cart"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </ProductPageAddToCartBtnStyle>
      </ProductPageProductDescFooterStyle>
    </ProductPageProductDescStyle>
  );
};

export default ProductPageProductDesc;
