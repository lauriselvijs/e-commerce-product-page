import React, { useEffect, useRef, useState } from "react";
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
import { useDetectMobileScreen } from "../../hooks/Screen.hook";

const HamburgerMenuOverlay = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(true);
  const [showHamburgerMenuOverlay, setShowHamburgerMenuOverlay] =
    useState<boolean>(true);

  const isMobile = useDetectMobileScreen();

  const hamburgerMenuOverlayModalRef = useRef(null);

  const onHamburgerMenuOverlayModalCloseBtnClick = () => {
    setShowHamburgerMenu(false);
  };

  const onTransitionEnd = () => {
    setShowHamburgerMenuOverlay(!showHamburgerMenuOverlay);
  };

  useEffect(() => {
    !isMobile && setShowHamburgerMenuOverlay(false);
  }, [isMobile]);

  return (
    <HamburgerMenuOverlayStyle selected={showHamburgerMenuOverlay}>
      <CSSTransition
        nodeRef={hamburgerMenuOverlayModalRef}
        in={showHamburgerMenu}
        classNames="slide-in"
        timeout={200}
        unmountOnExit
        onExited={() => onTransitionEnd()}
      >
        <HamburgerMenuOverlayModalStyle ref={hamburgerMenuOverlayModalRef}>
          <HamburgerMenuOverlayModalCloseBtnStyle
            onClick={onHamburgerMenuOverlayModalCloseBtnClick}
          >
            <HamburgerMenuOverlayModalCloseBtnIconStyle
              src={IconClose}
              alt="Close menu"
              show={showHamburgerMenu}
            />
          </HamburgerMenuOverlayModalCloseBtnStyle>
          <ProductCategoriesItemsStyle showOnMobile={showHamburgerMenu}>
            <ProductCategoriesItems />
          </ProductCategoriesItemsStyle>
        </HamburgerMenuOverlayModalStyle>
      </CSSTransition>
    </HamburgerMenuOverlayStyle>
  );
};

export default HamburgerMenuOverlay;
