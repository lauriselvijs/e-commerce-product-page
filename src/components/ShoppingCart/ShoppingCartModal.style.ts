import styled from "styled-components/macro";
import { IShoppingCartModalStyle } from "./ShoppingCartModal.style.d";

export const ShoppingCartModalStyle = styled.div<IShoppingCartModalStyle>`
  display: ${({ showCart }) => (showCart ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: -400%;
  z-index: 1;

  border-radius: 10px;
  box-shadow: 0px 18px 20px 0px ${({ theme }) => theme.colors.secondaryColor};

  width: 380px;
  height: auto;

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  color: ${({ theme }) => theme.colors.secondaryColorDark};

  background-color: ${({ theme }) => theme.colors.primaryColorVeryLight};

  transition: right 1s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    right: -200%;

    transition: right 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    top: 70px;
    right: -225%;
    width: 95vw;

    transition: right 0.5s;
  }
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

export const ShoppingCartModalEmptyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
`;
