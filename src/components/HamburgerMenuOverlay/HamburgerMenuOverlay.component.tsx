import { useEffect, useRef, useState, MouseEvent } from "react";
import { CSSTransition } from "react-transition-group";
import { bindActionCreators } from "@reduxjs/toolkit";

import { ProductCategoriesItemsStyle } from "../../styles/components/List.style";
import ProductCategoriesItems from "../ProductCategoriesItems";
import IconClose from "../../asset/icons/icon-close.svg";
import { useDetectMobileScreen } from "../../hooks/Screen.hook";
import { useAppDispatch, useAppSelector } from "../../hooks/Store.hook";
import { RootState } from "../../store/app/store";
import {
  HamburgerMenuActions,
  HamburgerMenuName,
} from "../../store/features/HamburgerMenu/HamburgerMenu.slice";
import ThemeBtn from "../ThemeBtn";

import {
  HamburgerMenuOverlayModalCloseBtnStyle,
  HamburgerMenuOverlayModalStyle,
  HamburgerMenuOverlayStyle,
  HamburgerMenuOverlayModalCloseBtnIconStyle,
} from "./HamburgerMenuOverlay.style";

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
  const hamburgerMenuOverlayModalRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useDetectMobileScreen();

  useEffect(() => {
    !isMobile && setShowHamburgerMenuOverlay(false);
    !isMobile && closeHamburgerMenu();
  }, [isMobile]);

  const onHamburgerMenuOverlayModalCloseBtnClick = () => {
    closeHamburgerMenu();
  };

  const onHamburgerMenuTransitionEnd = () => {
    setShowHamburgerMenuOverlay(false);
  };

  const onHamburgerMenuTransitionEnter = () => {
    setShowHamburgerMenuOverlay(true);
  };

  const handleClickOutsideGallery = (event: MouseEvent<HTMLDivElement>) => {
    if (
      hamburgerMenuOverlayModalRef.current &&
      !hamburgerMenuOverlayModalRef.current.contains(event.target as Node)
    ) {
      closeHamburgerMenu();
    }
  };

  return (
    <HamburgerMenuOverlayStyle
      onClick={handleClickOutsideGallery}
      selected={showHamburgerMenuOverlay}
    >
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
            aria-label="Close modal"
            onClick={onHamburgerMenuOverlayModalCloseBtnClick}
          >
            <HamburgerMenuOverlayModalCloseBtnIconStyle
              src={IconClose}
              alt="Close menu"
              aria-hidden="true"
              show={showHamburgerMenu}
            />
          </HamburgerMenuOverlayModalCloseBtnStyle>
          <ProductCategoriesItemsStyle showOnMobile={showHamburgerMenu}>
            <ThemeBtn />
            <ProductCategoriesItems />
          </ProductCategoriesItemsStyle>
        </HamburgerMenuOverlayModalStyle>
      </CSSTransition>
    </HamburgerMenuOverlayStyle>
  );
};

export default HamburgerMenuOverlay;
