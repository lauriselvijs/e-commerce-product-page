import React from "react";
import StoreLogo from "../../asset/images/icons/store-logo.svg";
import { LogoLinkStyle, LogoStyle } from "./Logo.style";

const Logo = () => {
  return (
    <LogoLinkStyle href="/">
      <LogoStyle width={138} height={20} src={StoreLogo} alt="Logo of store" />
    </LogoLinkStyle>
  );
};

export default Logo;
