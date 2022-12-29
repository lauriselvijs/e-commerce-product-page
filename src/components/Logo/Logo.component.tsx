import StoreLogo from "../../asset/images/icons/store-logo.svg";
import { LogoLinkContainerStyle, LogoLinkStyle, LogoStyle } from "./Logo.style";

const Logo = () => {
  return (
    <LogoLinkContainerStyle>
      <LogoLinkStyle href="/">
        <LogoStyle
          width={138}
          height={20}
          src={StoreLogo}
          alt="Logo of store"
        />
      </LogoLinkStyle>
    </LogoLinkContainerStyle>
  );
};

export default Logo;
