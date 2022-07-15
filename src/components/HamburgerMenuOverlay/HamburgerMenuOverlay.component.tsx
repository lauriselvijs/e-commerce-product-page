import React, { useState } from "react";
import { ProductCategoriesItemsStyle } from "../../styles/shared/List.style";
import ProductCategoriesItems from "../ProductCategoriesItems";
import {
  HamburgerMenuOverlayModalCloseBtnStyle,
  HamburgerMenuOverlayModalStyle,
  HamburgerMenuOverlayStyle,
  HamburgerMenuOverlayModalCloseBtnIconStyle,
} from "./HamburgerMenuOverlay.style";
import IconClose from "../../asset/images/icons/icon-close.svg";

const HamburgerMenuOverlay = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(true);

  const onHamburgerMenuOverlayModalCloseBtnClick = () => {
    setShowHamburgerMenu(false);
  };

  return (
    <HamburgerMenuOverlayStyle selected={showHamburgerMenu}>
      <HamburgerMenuOverlayModalStyle>
        <HamburgerMenuOverlayModalCloseBtnStyle
          onClick={onHamburgerMenuOverlayModalCloseBtnClick}
        >
          <HamburgerMenuOverlayModalCloseBtnIconStyle
            src={IconClose}
            alt="Close menu"
          />
        </HamburgerMenuOverlayModalCloseBtnStyle>
        <ProductCategoriesItemsStyle showOnMobile={true}>
          <ProductCategoriesItems />
        </ProductCategoriesItemsStyle>
      </HamburgerMenuOverlayModalStyle>
    </HamburgerMenuOverlayStyle>
  );
};

export default HamburgerMenuOverlay;
