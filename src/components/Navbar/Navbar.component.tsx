import React from "react";
import ShoppingCartBtn from "../ShoppingCartBtn";
import CustomerProfileBtn from "../CustomerProfileBtn";
import Logo from "../Logo";
import ProductCategories from "../ProductCategories";
import { NavbarStyle } from "./Navbar.style";
import ThemeBtn from "../ThemeBtn";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo />
      <ProductCategories />
      <ThemeBtn />
      <ShoppingCartBtn />
      <CustomerProfileBtn />
    </NavbarStyle>
  );
};

export default Navbar;
