import React from "react";
import {
  CustomerProfilePicStyle,
  CustomerProfileLinkStyle,
} from "./CustomerProfileLink.style";
import CustomerProfilePic from "../../asset/images/image-avatar.png";

const CustomerProfileBtn = () => {
  return (
    <CustomerProfileLinkStyle href="/user-profile">
      <CustomerProfilePicStyle
        src={CustomerProfilePic}
        width={42}
        height={42}
      />
    </CustomerProfileLinkStyle>
  );
};

export default CustomerProfileBtn;
