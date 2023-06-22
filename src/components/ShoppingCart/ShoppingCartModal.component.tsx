import { useRef } from "react";
import {
  ShoppingCartModalEmptyStyle,
  ShoppingCartModalFooterStyle,
  ShoppingCartModalStyle,
  ShoppingCartModalTitleStyle,
} from "./ShoppingCartModal.style";
import { PrimaryBtnStyle } from "../../styles/components/Button.style";
import { IShoppingCartModal } from "./ShoppingCartModal.component.d";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { CartName } from "../../store/features/Cart/Cart.slice";
import ShoppingCartModalItem from "../ShoppingCartModalItem";
import { CHECKOUT_BTN_NAME } from "../../constants/Button.const";
import { CART_TITLE, EMPTY_CART_TEXT } from "../../constants/Cart.const";
import { Link } from "react-router-dom";

const ShoppingCartModal = ({ showCart }: IShoppingCartModal) => {
  const { cart } = useAppSelector((state: RootState) => state[CartName]);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const productList = cart.map((product) => (
    <ShoppingCartModalItem product={product} key={product.product_id} />
  ));

  if (showCart) {
    return (
      <ShoppingCartModalStyle ref={modalRef}>
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
            <Link to="/checkout">
              <PrimaryBtnStyle>{CHECKOUT_BTN_NAME}</PrimaryBtnStyle>
            </Link>
          </ShoppingCartModalFooterStyle>
        )}
      </ShoppingCartModalStyle>
    );
  }

  return null;
};

export default ShoppingCartModal;
