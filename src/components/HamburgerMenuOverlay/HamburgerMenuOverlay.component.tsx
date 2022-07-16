import React, { useRef, useState } from "react";
import { ProductCategoriesItemsStyle } from "../../styles/shared/List.style";
import ProductCategoriesItems from "../ProductCategoriesItems";
import {
  HamburgerMenuOverlayModalCloseBtnStyle,
  HamburgerMenuOverlayModalStyle,
  HamburgerMenuOverlayStyle,
  HamburgerMenuOverlayModalCloseBtnIconStyle,
} from "./HamburgerMenuOverlay.style";
import IconClose from "../../asset/images/icons/icon-close.svg";
import { CSSTransition } from "react-transition-group";

const HamburgerMenuOverlay = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(true);
  const HamburgerMenuOverlayModalRef = useRef(null);

  const onHamburgerMenuOverlayModalCloseBtnClick = () => {
    setShowHamburgerMenu(false);
  };

  const onTransitionEnd = () => {
    console.log("done");
  };

  return (
    <HamburgerMenuOverlayStyle selected={true}>
      <CSSTransition
        nodeRef={HamburgerMenuOverlayModalRef}
        in={showHamburgerMenu}
        classNames="fade"
        timeout={1000}
        unmountOnExit
        onExited={() => onTransitionEnd()}
      >
        <HamburgerMenuOverlayModalStyle
          ref={HamburgerMenuOverlayModalRef}
          onAnimationEnd={onTransitionEnd}
        >
          <HamburgerMenuOverlayModalCloseBtnStyle
            onClick={onHamburgerMenuOverlayModalCloseBtnClick}
          >
            <HamburgerMenuOverlayModalCloseBtnIconStyle
              src={IconClose}
              alt="Close menu"
            />
          </HamburgerMenuOverlayModalCloseBtnStyle>
          {/* <ProductCategoriesItemsStyle showOnMobile={true}>
            <ProductCategoriesItems />
          </ProductCategoriesItemsStyle> */}
        </HamburgerMenuOverlayModalStyle>
      </CSSTransition>
    </HamburgerMenuOverlayStyle>
  );
};

export default HamburgerMenuOverlay;
