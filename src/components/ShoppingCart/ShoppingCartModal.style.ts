import styled from "styled-components/macro";
import { IShoppingCartModalStyle } from "./ShoppingCartModal.style.d";

export const ShoppingCartModalStyle = styled.div<IShoppingCartModalStyle>`
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

export const ShoppingCartModalTitleStyle = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};

  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryColorLight};
`;

export const ShoppingCartModalContentsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const ShoppingCartModalProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ShoppingCartModalProductNameStyle = styled.div``;
export const ShoppingCartModalProductPriceInfoStyle = styled.div``;
export const ShoppingCartModalProductPriceInfoIndentStyle = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
`;

export const ShoppingCartModalProductImageStyle = styled.img`
  border-radius: 5px;
`;
export const ShoppingCartModalProductDeleteBtnStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ShoppingCartModalProductDeleteBtnImgStyle = styled.img`
  :hover {
    filter: contrast(0%);
  }
`;

export const ShoppingCartModalFooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ShoppingCartModalCheckoutLinkStyle = styled.a`
  text-decoration: none;
`;
