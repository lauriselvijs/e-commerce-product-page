import React from "react";
import ShoppingCartBtn from "../ShoppingCartBtn";
import CustomerProfileBtn from "../CustomerProfileBtn";
import Logo from "../Logo";
import ProductCategories from "../ProductCategories";
import { NavbarStyle } from "./Navbar.style";
import ThemeBtn from "../ThemeBtn";
import { blue, darkOrange } from "../../styles/base/Global.style";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo />
      <ProductCategories />
      <ThemeBtn theme={darkOrange} />
      <ThemeBtn theme={blue} />
      <ShoppingCartBtn />
      <CustomerProfileBtn />
    </NavbarStyle>
  );
};

export default Navbar;
