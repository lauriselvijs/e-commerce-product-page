import React from "react";
import ShoppingCartBtn from "../ShoppingCartBtn";
import CustomerProfileBtn from "../CustomerProfileBtn";
import Logo from "../Logo";
import ProductCategories from "../ProductCategories";
import { NavbarStyle } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo />
      <ProductCategories />
      <ShoppingCartBtn />
      <CustomerProfileBtn />
    </NavbarStyle>
  );
};

export default Navbar;
