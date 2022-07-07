import React from "react";
import {
  CustomerProfileBtnImageStyle,
  CustomerProfileBtnLinkStyle,
  CustomerProfileBtnStyle,
} from "./CustomerProfileBtn.style";
import CustomerProfilePic from "../../asset/images/image-avatar.png";

const CustomerProfileBtn = () => {
  return (
    <CustomerProfileBtnLinkStyle href="/user-profile">
      <CustomerProfileBtnStyle>
        <CustomerProfileBtnImageStyle
          src={CustomerProfilePic}
          width={42}
          height={42}
        />
      </CustomerProfileBtnStyle>
    </CustomerProfileBtnLinkStyle>
  );
};

export default CustomerProfileBtn;
