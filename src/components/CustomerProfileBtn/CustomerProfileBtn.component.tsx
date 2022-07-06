import React from "react";
import {
  CustomerProfileBtnImage,
  CustomerProfileBtnStyle,
} from "./CustomerProfileBtn.style";
import CustomerProfilePic from "../../asset/images/image-avatar.png";

const CustomerProfileBtn = () => {
  return (
    <CustomerProfileBtnStyle>
      <CustomerProfileBtnImage
        src={CustomerProfilePic}
        width={42}
        height={42}
      />
    </CustomerProfileBtnStyle>
  );
};

export default CustomerProfileBtn;
