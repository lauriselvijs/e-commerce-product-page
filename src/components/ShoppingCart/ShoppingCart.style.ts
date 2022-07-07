import styled from "styled-components/macro";
import { IShoppingCartStyle } from "./ShoppingCart.style.d";

export const ShoppingCartStyle = styled.div<IShoppingCartStyle>`
  display: ${({ showCart }) => (showCart ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: -400%;

  border-radius: 10px;
  box-shadow: 0px 18px 20px 0px ${({ theme }) => theme.colors.secondaryColor};

  width: 380px;
  height: auto;

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  color: ${({ theme }) => theme.colors.secondaryColorDark};

  background-color: ${({ theme }) => theme.colors.primaryColorVeryLight};
`;

export const ShoppingCartTitleStyle = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};

  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryColorLight};
`;

export const ShoppingCartContentsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const ShoppingCartProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ShoppingCartProductNameStyle = styled.div``;
export const ShoppingCartProductPriceInfoStyle = styled.div``;
export const ShoppingCartProductPriceInfoIndentStyle = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
`;

export const ShoppingCartProductImageStyle = styled.img`
  border-radius: 5px;
`;
export const ShoppingCartProductDeleteBtnStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ShoppingCartProductDeleteBtnImgStyle = styled.img`
  :hover {
    filter: contrast(0%);
  }
`;

export const ShoppingCartFooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ShoppingCartCheckoutBtnLinkStyle = styled.a`
  text-decoration: none;
`;
