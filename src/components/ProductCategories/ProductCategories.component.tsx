import React from "react";
import {
  HamburgerMenuBtnStyle,
  HamburgerMenuIconStyle,
  HamburgerMenuBtnContainerStyle,
} from "./ProductCategories.style";
import HamburgerIcon from "../../asset/images/icons/icon-menu.svg";
import HamburgerMenuOverlay from "../HamburgerMenuOverlay";
import ProductCategoriesItems from "../ProductCategoriesItems";
import { ProductCategoriesItemsStyle } from "../../styles/shared/List.style";
import { useAppDispatch } from "../../hooks/Store.hook";
import { HamburgerMenuActions } from "../../store/features/HamburgerMenu/HamburgerMenu.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import ThemeBtn from "../ThemeBtn";

const ProductCategories = () => {
  const appDispatch = useAppDispatch();
  const { showHamburgerMenu } = bindActionCreators(
    HamburgerMenuActions,
    appDispatch
  );

  const onHamburgerMenuBtnClick = () => {
    showHamburgerMenu();
  };

  return (
    <>
      <HamburgerMenuOverlay />
      <HamburgerMenuBtnContainerStyle>
        <HamburgerMenuBtnStyle onClick={onHamburgerMenuBtnClick}>
          <HamburgerMenuIconStyle
            src={HamburgerIcon}
            width={16}
            height={15}
            alt="Menu"
          />
        </HamburgerMenuBtnStyle>
      </HamburgerMenuBtnContainerStyle>
      <ProductCategoriesItemsStyle showOnMobile={false}>
        <ThemeBtn />
        <ProductCategoriesItems />
      </ProductCategoriesItemsStyle>
    </>
  );
};

export default ProductCategories;
