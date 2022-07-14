import React, { useState } from "react";
import {
  ShoppingCartModalCheckoutLinkStyle,
  ShoppingCartModalContentsStyle,
  ShoppingCartModalFooterStyle,
  ShoppingCartModalProductDeleteBtnImgStyle,
  ShoppingCartModalProductDeleteBtnStyle,
  ShoppingCartModalProductImageStyle,
  ShoppingCartModalProductInfoStyle,
  ShoppingCartModalProductNameStyle,
  ShoppingCartModalProductPriceInfoIndentStyle,
  ShoppingCartModalProductPriceInfoStyle,
  ShoppingCartModalStyle,
  ShoppingCartModalTitleStyle,
} from "./ShoppingCartModal.style";
import ProductImageThumbnail from "../../asset/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../asset/images/icons/icon-delete.svg";
import { PrimaryBtnStyle } from "../../styles/shared/Button.style";
import { IShoppingCartModal } from "./ShoppingCartModal.component.d";

const ShoppingCartModal = ({ showCart }: IShoppingCartModal) => {
  const [hoverOverCart, setHoverOverCart] = useState<boolean>(false);

  const onShoppingCartModalMouseEnter = () => {
    setHoverOverCart(true);
  };

  const onShoppingCartModalMouseLeave = () => {
    setHoverOverCart(false);
  };

  return (
    <ShoppingCartModalStyle
      showCart={showCart || hoverOverCart}
      onMouseEnter={onShoppingCartModalMouseEnter}
      onMouseLeave={onShoppingCartModalMouseLeave}
    >
      <ShoppingCartModalTitleStyle>Cart</ShoppingCartModalTitleStyle>
      <ShoppingCartModalContentsStyle>
        <ShoppingCartModalProductImageStyle
          src={ProductImageThumbnail}
          width={64}
          height={64}
        />
        <ShoppingCartModalProductInfoStyle>
          <ShoppingCartModalProductNameStyle>
            Fall Limited Edition Sneakers
          </ShoppingCartModalProductNameStyle>
          <ShoppingCartModalProductPriceInfoStyle>
            $125.00 x 3{" "}
            <ShoppingCartModalProductPriceInfoIndentStyle>
              $375.00
            </ShoppingCartModalProductPriceInfoIndentStyle>
          </ShoppingCartModalProductPriceInfoStyle>
        </ShoppingCartModalProductInfoStyle>
        <ShoppingCartModalProductDeleteBtnStyle>
          <ShoppingCartModalProductDeleteBtnImgStyle
            src={DeleteIcon}
            width={14}
            height={16}
          />
        </ShoppingCartModalProductDeleteBtnStyle>
      </ShoppingCartModalContentsStyle>
      <ShoppingCartModalFooterStyle>
        <ShoppingCartModalCheckoutLinkStyle href="/checkout">
          <PrimaryBtnStyle>Checkout</PrimaryBtnStyle>
        </ShoppingCartModalCheckoutLinkStyle>
      </ShoppingCartModalFooterStyle>
    </ShoppingCartModalStyle>
  );
};

export default ShoppingCartModal;
