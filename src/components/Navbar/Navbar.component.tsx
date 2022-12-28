import React from "react";
import ShoppingCartBtn from "../ShoppingCartBtn";
import CustomerProfileBtn from "../CustomerProfileBtn";
import Logo from "../Logo";
import ProductCategories from "../ProductCategories";
import { NavbarStyle } from "./Navbar.style";
import ThemeBtn from "../ThemeBtn";
import { themes } from "../../styles/theme";
import { keys } from "../../utils/Object.util";

const Navbar = () => {
  keys(themes).forEach((theme) => console.log(themes[theme]));

  return (
    <NavbarStyle>
      <Logo />
      <ProductCategories />
      {/* <ThemeBtn {...defaultTheme} />
      <ThemeBtn {...blueTheme} />
      <ThemeBtn {...darkOrangeTheme} /> */}
      <ShoppingCartBtn />
      <CustomerProfileBtn />
    </NavbarStyle>
  );
};

export default Navbar;
