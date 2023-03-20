import styled from "styled-components/macro";
import { ShoppingCartModalStyle as  IShoppingCartModalStyle} from "./ShoppingCartModal.style.d";

export const ShoppingCartModalStyle = styled.div<IShoppingCartModalStyle>`
  background-color: ${({ theme }) => theme.color.primaryVeryLight};
  border-radius: 10px;
  box-shadow: 0px 18px 20px 0px ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondaryDark};
  display: ${({ showCart }) => (showCart ? "block" : "none")};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  height: auto;
  position: absolute;
  right: -400%;
  top: 60px;
  min-width: 380px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    right: -50px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    min-width: 80vw;
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
