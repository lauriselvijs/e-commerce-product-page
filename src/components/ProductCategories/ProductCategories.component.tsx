import React from "react";
import {
  ProductCategoriesStyle,
  ProductCategoriesItemStyle,
  HamburgerMenuBtnStyle,
  HamburgerMenuIconStyle,
  HamburgerMenuBtnContainerStyle,
} from "./ProductCategories.style";
import HamburgerIcon from "../../asset/images/icons/icon-menu.svg";
import HamburgerMenuOverlay from "../HamburgerMenuOverlay";
import ProductCategoriesItems from "../ProductCategoriesItems";
import { ProductCategoriesItemsStyle } from "../../styles/shared/List.style";

const ProductCategories = () => {
  return (
    <>
      <HamburgerMenuOverlay />
      <HamburgerMenuBtnContainerStyle>
        <HamburgerMenuBtnStyle>
          <HamburgerMenuIconStyle
            src={HamburgerIcon}
            width={16}
            height={15}
            alt="Menu"
          />
        </HamburgerMenuBtnStyle>
      </HamburgerMenuBtnContainerStyle>
      <ProductCategoriesItemsStyle showOnMobile={false}>
        <ProductCategoriesItems />
      </ProductCategoriesItemsStyle>
    </>
  );
};

export default ProductCategories;
