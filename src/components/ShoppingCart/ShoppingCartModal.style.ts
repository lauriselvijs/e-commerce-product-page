import styled from "styled-components/macro";
import { IShoppingCartModalStyle } from "./ShoppingCartModal.style.d";

export const ShoppingCartModalStyle = styled.div<IShoppingCartModalStyle>`
  display: ${({ showCart }) => (showCart ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: -400%;
  z-index: 1;

  border-radius: 10px;
  box-shadow: 0px 18px 20px 0px ${({ theme }) => theme.color.secondary};

  width: 380px;
  height: auto;

  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.secondaryDark};

  background-color: ${({ theme }) => theme.color.primaryVeryLight};

  transition: right 1s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    right: -200%;

    transition: right 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    right: -140%;
    width: 90vw;

    transition: right 0.5s;
  }
`;

export const ShoppingCartModalTitleStyle = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-weight: ${({ theme }) => theme.font.weight.bold};

  color: ${({ theme }) => theme.color.secondaryVeryDark};

  border-bottom: 3px solid ${({ theme }) => theme.color.secondaryLight};
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

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};

  color: ${({ theme }) => theme.color.secondaryDark};
`;
