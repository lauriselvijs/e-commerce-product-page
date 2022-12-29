import { useState } from "react";
import {
  ShoppingCartModalCheckoutLinkStyle,
  ShoppingCartModalEmptyStyle,
  ShoppingCartModalFooterStyle,
  ShoppingCartModalStyle,
  ShoppingCartModalTitleStyle,
} from "./ShoppingCartModal.style";
import { PrimaryBtnStyle } from "../../styles/shared/Button.style";
import { IShoppingCartModal } from "./ShoppingCartModal.component.d";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { CartName } from "../../store/features/Cart/Cart.slice";
import ShoppingCartModalItem from "../ShoppingCartModalItem";
import { CHECKOUT_BTN_NAME } from "../../constants/Button.const";
import { CART_TITLE, EMPTY_CART_TEXT } from "../../constants/Cart.const";

const ShoppingCartModal = ({ showCart }: IShoppingCartModal) => {
  const [hoverOverCart, setHoverOverCart] = useState<boolean>(false);
  const { cart } = useAppSelector((state: RootState) => state[CartName]);

  const onShoppingCartModalMouseEnter = () => {
    setHoverOverCart(true);
  };

  const onShoppingCartModalMouseLeave = () => {
    setHoverOverCart(false);
  };

  const productList = cart.map((product) => (
    <ShoppingCartModalItem product={product} key={product.product_id} />
  ));

  return (
    <ShoppingCartModalStyle
      showCart={showCart || hoverOverCart}
      onMouseEnter={onShoppingCartModalMouseEnter}
      onMouseLeave={onShoppingCartModalMouseLeave}
    >
      <ShoppingCartModalTitleStyle>{CART_TITLE}</ShoppingCartModalTitleStyle>
      {productList.length !== 0 ? (
        productList
      ) : (
        <ShoppingCartModalEmptyStyle>
          {EMPTY_CART_TEXT}
        </ShoppingCartModalEmptyStyle>
      )}
      {productList.length !== 0 && (
        <ShoppingCartModalFooterStyle>
          <ShoppingCartModalCheckoutLinkStyle href="/checkout">
            <PrimaryBtnStyle>{CHECKOUT_BTN_NAME}</PrimaryBtnStyle>
          </ShoppingCartModalCheckoutLinkStyle>
        </ShoppingCartModalFooterStyle>
      )}
    </ShoppingCartModalStyle>
  );
};

export default ShoppingCartModal;
