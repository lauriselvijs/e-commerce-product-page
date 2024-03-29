import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { CartName } from "../../store/features/Cart/Cart.slice";
import ShoppingCartModal from "../ShoppingCart";
import {
  ShoppingCartBtnContainerStyle,
  ShoppingCartBtnItemAmountStyle,
  ShoppingCartBtnStyle,
} from "./ShoppingCartBtn.style";
import { useLocation } from "react-router-dom";

const ShoppingCartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state[CartName]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // This callback will be called whenever the URL path changes
    setShowCart(false);
  }, [location]);

  useEffect(() => {
    const onOutsideClick = (event: any) => {
      if (!btnRef.current?.contains(event.target)) {
        setShowCart(false);
      }
    };

    // Attach the event listener on component mount
    document.addEventListener("click", onOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  const onShoppingCartBtnClick = () => {
    setShowCart(!showCart);
  };

  return (
    <ShoppingCartBtnContainerStyle ref={btnRef}>
      <ShoppingCartBtnStyle
        showCart={showCart}
        onClick={onShoppingCartBtnClick}
        aria-label="Customer shopping cart"
      >
        <svg
          width="22"
          height="20"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
      </ShoppingCartBtnStyle>
      {cart.length !== 0 && (
        <ShoppingCartBtnItemAmountStyle>
          {cart.length}
        </ShoppingCartBtnItemAmountStyle>
      )}
      <ShoppingCartModal showCart={showCart} />
    </ShoppingCartBtnContainerStyle>
  );
};

export default ShoppingCartBtn;
