import React from "react";
import {
  CustomerProfilePicStyle,
  CustomerProfileStyle,
} from "./CustomerProfileLink.style";
import CustomerProfilePic from "../../asset/images/image-avatar.png";
import { Link } from "react-router-dom";

const CustomerProfileBtn = () => {
  return (
    <CustomerProfileStyle>
      <Link to="/user-profile">
        <CustomerProfilePicStyle
          alt="User profile"
          aria-label="Go to user profile"
          src={CustomerProfilePic}
          width={42}
          height={42}
        />
      </Link>
    </CustomerProfileStyle>
  );
};

export default CustomerProfileBtn;
