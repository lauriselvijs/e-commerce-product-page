import React, { useState } from "react";
import {
  ShoppingCartCheckoutBtnLinkStyle,
  ShoppingCartContentsStyle,
  ShoppingCartFooterStyle,
  ShoppingCartProductDeleteBtnImgStyle,
  ShoppingCartProductDeleteBtnStyle,
  ShoppingCartProductImageStyle,
  ShoppingCartProductInfoStyle,
  ShoppingCartProductNameStyle,
  ShoppingCartProductPriceInfoIndentStyle,
  ShoppingCartProductPriceInfoStyle,
  ShoppingCartStyle,
  ShoppingCartTitleStyle,
} from "./ShoppingCart.style";
import ProductImageThumbnail from "../../asset/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../asset/images/icons/icon-delete.svg";
import { PrimaryBtnStyle } from "../../styles/shared/Button.style";

// TODO:
// [] - check if needed if not move hidden prop to global state
interface IShoppingCart {
  showCart: boolean;
}

const ShoppingCart = ({ showCart }: IShoppingCart) => {
  const [hoverOverCart, setHoverOverCart] = useState<boolean>(false);

  const onShoppingCartMouseEnter = () => {
    setHoverOverCart(true);
  };

  const onShoppingCartMouseLeave = () => {
    setHoverOverCart(false);
  };

  return (
    <ShoppingCartStyle
      showCart={showCart || hoverOverCart}
      onMouseEnter={onShoppingCartMouseEnter}
      onMouseLeave={onShoppingCartMouseLeave}
    >
      <ShoppingCartTitleStyle>Cart</ShoppingCartTitleStyle>
      <ShoppingCartContentsStyle>
        <ShoppingCartProductImageStyle
          src={ProductImageThumbnail}
          width={64}
          height={64}
        />
        <ShoppingCartProductInfoStyle>
          <ShoppingCartProductNameStyle>
            Fall Limited Edition Sneakers
          </ShoppingCartProductNameStyle>
          <ShoppingCartProductPriceInfoStyle>
            $125.00 x 3{" "}
            <ShoppingCartProductPriceInfoIndentStyle>
              $375.00
            </ShoppingCartProductPriceInfoIndentStyle>
          </ShoppingCartProductPriceInfoStyle>
        </ShoppingCartProductInfoStyle>
        <ShoppingCartProductDeleteBtnStyle>
          <ShoppingCartProductDeleteBtnImgStyle
            src={DeleteIcon}
            width={14}
            height={16}
          />
        </ShoppingCartProductDeleteBtnStyle>
      </ShoppingCartContentsStyle>
      <ShoppingCartFooterStyle>
        <ShoppingCartCheckoutBtnLinkStyle href="/checkout">
          <PrimaryBtnStyle>Checkout</PrimaryBtnStyle>
        </ShoppingCartCheckoutBtnLinkStyle>
      </ShoppingCartFooterStyle>
    </ShoppingCartStyle>
  );
};

export default ShoppingCart;
