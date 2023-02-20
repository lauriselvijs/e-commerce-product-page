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
} from "./ProductPageProductDesc.style";
import PlusIcon from "../../asset/icons/icon-plus.svg";
import MinusIcon from "../../asset/icons/icon-minus.svg";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { CartActions, CartName } from "../../store/features/Cart/Cart.slice";
import { RootState } from "../../store/app/store";
import { SHOES } from "../../constants/Products.const";
import { currencyFormat } from "../../utils/Currency.uti";
import { decToPercentString } from "../../utils/Convert.util";
import { ADD_TO_CART_BTN_NAME } from "../../constants/Button.const";

const ProductPageProductDesc = () => {
  const {
    product_company,
    product_name,
    product_desc,
    product_price,
    product_currency,
    product_disc,
    product_price_with_disc,
  } = SHOES;
  const appDispatch = useAppDispatch();
  const { incProductQtyToCart, decProductQtyToCart } = bindActionCreators(
    CartActions,
    appDispatch
  );
  const { addProductToCart } = bindActionCreators(CartActions, appDispatch);
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
    addProductToCart({ ...SHOES, product_qty: productQtyToCart });
  };

  return (
    <ProductPageProductDescStyle>
      <ProductPageProductCompanyStyle>
        {product_company}
      </ProductPageProductCompanyStyle>
      <ProductPageMainInfoSectionStyle>
        <ProductPageProductNameStyle>
          {product_name}
        </ProductPageProductNameStyle>
        <ProductPageProductInfoStyle>
          {product_desc}
        </ProductPageProductInfoStyle>
      </ProductPageMainInfoSectionStyle>
      <ProductPageProductPriceContainerStyle>
        <ProductPageProductDiscPriceStyle>
          {currencyFormat(product_currency, product_price_with_disc)}
          <ProductPageProductPriceDiscPercentageBadgeStyle>
            {decToPercentString(product_disc)}
          </ProductPageProductPriceDiscPercentageBadgeStyle>
        </ProductPageProductDiscPriceStyle>
        <ProductPageProductRealPriceStyle>
          {currencyFormat(product_currency, product_price)}
        </ProductPageProductRealPriceStyle>
      </ProductPageProductPriceContainerStyle>
      <ProductPageProductDescFooterStyle>
        <ProductPageQuantityBtnContainerStyle>
          <ProductPageQuantityIncBtnStyle
            aria-label="Increase quantity"
            onClick={onProductPageQuantityDecBtnClick}
          >
            <ProductPageQuantityDecIconStyle
              width={12}
              height={4}
              src={MinusIcon}
              alt="Decrease quantity"
              aria-hidden="true"
            />
          </ProductPageQuantityIncBtnStyle>{" "}
          {productQtyToCart}{" "}
          <ProductPageQuantityDecBtnStyle
            aria-label="Decrease quantity"
            onClick={onProductPageQuantityIncBtnClick}
          >
            <ProductPageQuantityIncIconStyle
              width={12}
              height={12}
              src={PlusIcon}
              aria-hidden="true"
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
          {ADD_TO_CART_BTN_NAME}
        </ProductPageAddToCartBtnStyle>
      </ProductPageProductDescFooterStyle>
    </ProductPageProductDescStyle>
  );
};

export default ProductPageProductDesc;
