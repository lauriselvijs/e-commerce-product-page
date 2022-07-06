import React from "react";
import CartIcon from "../../asset/images/icons/icon-cart.svg";
import {
  ShoppingCartBtnIconStyle,
  ShoppingCartBtnItemAmountStyle,
  ShoppingCartBtnStyle,
} from "./ShoppingCartBtn.style";

const ShoppingCartBtn = () => {
  return (
    <ShoppingCartBtnStyle>
      <ShoppingCartBtnIconStyle
        width={22}
        height={20}
        src={CartIcon}
        alt="Customer shopping cart"
      />
      <ShoppingCartBtnItemAmountStyle>3</ShoppingCartBtnItemAmountStyle>
    </ShoppingCartBtnStyle>
  );
};

export default ShoppingCartBtn;
