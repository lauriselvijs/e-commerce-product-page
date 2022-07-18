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
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  HamburgerMenuActions,
  HamburgerMenuName,
} from "../../store/features/HamburgerMenu/HamburgerMenu.slice";

const HamburgerMenuOverlay = () => {
  const [showHamburgerMenuOverlay, setShowHamburgerMenuOverlay] =
    useState<boolean>(false);

  const appDispatch = useAppDispatch();
  const { closeHamburgerMenu } = bindActionCreators(
    HamburgerMenuActions,
    appDispatch
  );
  const { showHamburgerMenu } = useAppSelector(
    (state: RootState) => state[HamburgerMenuName]
  );
  const hamburgerMenuOverlayModalRef = useRef(null);
  const isMobile = useDetectMobileScreen();

  const onHamburgerMenuOverlayModalCloseBtnClick = () => {
    closeHamburgerMenu();
  };

  const onHamburgerMenuTransitionEnd = () => {
    setShowHamburgerMenuOverlay(false);
  };

  const onHamburgerMenuTransitionEnter = () => {
    setShowHamburgerMenuOverlay(true);
  };

  useEffect(() => {
    !isMobile && setShowHamburgerMenuOverlay(false);
    !isMobile && closeHamburgerMenu();
  }, [isMobile]);

  return (
    <HamburgerMenuOverlayStyle selected={showHamburgerMenuOverlay}>
      <CSSTransition
        nodeRef={hamburgerMenuOverlayModalRef}
        in={showHamburgerMenu}
        classNames="slide"
        timeout={200}
        onEnter={() => onHamburgerMenuTransitionEnter()}
        onExited={() => onHamburgerMenuTransitionEnd()}
        unmountOnExit
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
