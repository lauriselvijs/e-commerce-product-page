import StoreLogo from "../../asset/icons/store-logo.svg";

import { LogoIconStyle, LogoStyle } from "./Logo.style";

const Logo = () => {
  return (
    <LogoStyle aria-label="Your profile" href="/">
      <LogoIconStyle
        width={138}
        height={20}
        src={StoreLogo}
        alt="Logo of store"
        aria-hidden="true"
      />
    </LogoStyle>
  );
};

export default Logo;
