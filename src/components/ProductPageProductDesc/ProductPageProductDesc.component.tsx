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
  ProductPageQuantityBtnStyle,
  ProductPageQuantityDecStyle,
  ProductPageQuantityIncStyle,
  ProductPageQuantityIncBtnStyle,
  ProductPageQuantityDecBtnStyle,
} from "./ProductPageProductDesc.styled";
import PlusIcon from "../../asset/images/icons/icon-plus.svg";
import MinusIcon from "../../asset/images/icons/icon-minus.svg";

const ProductPageProductDesc = () => {
  return (
    <ProductPageProductDescStyle>
      <ProductPageProductCompanyStyle>
        SNEAKER COMPANY
      </ProductPageProductCompanyStyle>
      <ProductPageMainInfoSectionStyle>
        <ProductPageProductNameStyle>
          Fall Limited Edition Sneakers
        </ProductPageProductNameStyle>
        <ProductPageProductInfoStyle>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </ProductPageProductInfoStyle>
      </ProductPageMainInfoSectionStyle>
      <ProductPageProductPriceContainerStyle>
        <ProductPageProductDiscPriceStyle>
          $125.00
          <ProductPageProductPriceDiscPercentageBadgeStyle>
            50%
          </ProductPageProductPriceDiscPercentageBadgeStyle>
        </ProductPageProductDiscPriceStyle>
        <ProductPageProductRealPriceStyle>
          $250.00
        </ProductPageProductRealPriceStyle>
      </ProductPageProductPriceContainerStyle>
      <ProductPageProductDescFooterStyle>
        <ProductPageQuantityBtnStyle>
          <ProductPageQuantityIncBtnStyle />
          <ProductPageQuantityDecStyle
            width={12}
            height={12}
            src={PlusIcon}
          />{" "}
          3 <ProductPageQuantityDecBtnStyle />
          <ProductPageQuantityIncStyle width={12} height={4} src={MinusIcon} />
        </ProductPageQuantityBtnStyle>
        <ProductPageAddToCartBtnStyle>Add to cart</ProductPageAddToCartBtnStyle>
      </ProductPageProductDescFooterStyle>
    </ProductPageProductDescStyle>
  );
};

export default ProductPageProductDesc;
