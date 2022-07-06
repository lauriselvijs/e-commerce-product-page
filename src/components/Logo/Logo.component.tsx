import React from "react";
import StoreLogo from "../../asset/images/icons/store-logo.svg";
import { LogoStyle } from "./Logo.style";

const Logo = () => {
  return (
    <LogoStyle width={138} height={20} src={StoreLogo} alt="Logo of store" />
  );
};

export default Logo;
