import ShoppingCartBtn from "../ShoppingCartBtn";
import CustomerProfileBtn from "../CustomerProfileBtn";
import Logo from "../Logo";
import ProductCategories from "../ProductCategories";
import { NavbarStyle } from "./Navbar.style";
import ThemeBtn from "../ThemeBtn";
import { themes } from "../../styles/theme";
import { keys } from "../../utils/Object.util";

const Navbar = () => {
  const renderThemeBtn = keys(themes).map((theme) => (
    <ThemeBtn {...themes[theme]} />
  ));

  return (
    <NavbarStyle>
      <Logo />
      <ProductCategories />
      {renderThemeBtn}
      <ShoppingCartBtn />
      <CustomerProfileBtn />
    </NavbarStyle>
  );
};

export default Navbar;
