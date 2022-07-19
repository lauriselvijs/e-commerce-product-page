import React from "react";
import {
  ShoppingCartModalContentsStyle,
  ShoppingCartModalProductDeleteBtnImgStyle,
  ShoppingCartModalProductDeleteBtnStyle,
  ShoppingCartModalProductImageStyle,
  ShoppingCartModalProductInfoStyle,
  ShoppingCartModalProductNameStyle,
  ShoppingCartModalProductPriceInfoIndentStyle,
  ShoppingCartModalProductPriceInfoStyle,
} from "./ShoppingCartModalItem.style";
import DeleteIcon from "../../asset/images/icons/icon-delete.svg";
import { productTotalPriceByQty } from "../../utils/Price.util";
import { IShoppingCartModalItem } from "./ShoppingCartModalItem.component.d";
import { useAppDispatch } from "../../hooks/Store.hook";
import { bindActionCreators } from "@reduxjs/toolkit";
import { CartActions } from "../../store/features/Cart/Cart.slice";
import { currencyFormat } from "../../utils/Currency.uti";

const ShoppingCartModalItem = ({
  product: {
    product_id,
    product_name,
    product_price_with_disc,
    product_price,
    product_currency,
    product_qty,
    product_gallery,
  },
}: IShoppingCartModalItem) => {
  const appDispatch = useAppDispatch();
  const { removeProductFromCart } = bindActionCreators(
    CartActions,
    appDispatch
  );

  const onShoppingCartModalProductDeleteBtnClick = (productId: string) => {
    removeProductFromCart(productId);
  };

  return (
    <ShoppingCartModalContentsStyle>
      <ShoppingCartModalProductImageStyle
        src={product_gallery[0].thumbnail}
        width={64}
        height={64}
      />
      <ShoppingCartModalProductInfoStyle>
        <ShoppingCartModalProductNameStyle>
          {product_name}
        </ShoppingCartModalProductNameStyle>
        <ShoppingCartModalProductPriceInfoStyle>
          {currencyFormat(product_currency, product_price_with_disc || 0)} x{" "}
          {product_qty}{" "}
          <ShoppingCartModalProductPriceInfoIndentStyle>
            {currencyFormat(
              product_currency,
              productTotalPriceByQty(
                product_price_with_disc || product_price,
                product_qty
              )
            )}
          </ShoppingCartModalProductPriceInfoIndentStyle>
        </ShoppingCartModalProductPriceInfoStyle>
      </ShoppingCartModalProductInfoStyle>
      <ShoppingCartModalProductDeleteBtnStyle
        onClick={() => onShoppingCartModalProductDeleteBtnClick(product_id)}
      >
        <ShoppingCartModalProductDeleteBtnImgStyle
          src={DeleteIcon}
          width={14}
          height={16}
          alt="Delete item from cart"
        />
      </ShoppingCartModalProductDeleteBtnStyle>
    </ShoppingCartModalContentsStyle>
  );
};

export default ShoppingCartModalItem;
