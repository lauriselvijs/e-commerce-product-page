import React, { useState } from "react";
import CartIcon from "../../asset/images/icons/icon-cart.svg";
import ShoppingCart from "../ShoppingCart";
import {
  ShoppingCartBtnContainerStyle,
  ShoppingCartBtnIconStyle,
  ShoppingCartBtnItemAmountStyle,
  ShoppingCartBtnStyle,
} from "./ShoppingCartBtn.style";

const ShoppingCartBtn = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const onShoppingCartContainerMouseEnter = () => {
    setShowCart(true);
  };

  const onShoppingCartContainerMouseLeave = () => {
    setShowCart(false);
  };

  const onShoppingCartBtnClick = () => {
    setShowCart(!showCart);
  };

  return (
    <ShoppingCartBtnContainerStyle
      onMouseEnter={onShoppingCartContainerMouseEnter}
      onMouseLeave={onShoppingCartContainerMouseLeave}
    >
      <ShoppingCartBtnStyle onClick={onShoppingCartBtnClick}>
        <ShoppingCartBtnIconStyle
          showCart={showCart}
          width={22}
          height={20}
          src={CartIcon}
          alt="Customer shopping cart"
        />
        <ShoppingCartBtnItemAmountStyle>3</ShoppingCartBtnItemAmountStyle>
      </ShoppingCartBtnStyle>
      <ShoppingCart showCart={showCart} />
    </ShoppingCartBtnContainerStyle>
  );
};

export default ShoppingCartBtn;
