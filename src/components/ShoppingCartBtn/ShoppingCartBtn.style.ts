import styled, { css } from "styled-components/macro";
import { IShoppingCartModalStyle } from "../ShoppingCart/ShoppingCartModal.style.d";

export const ShoppingCartBtnContainerStyle = styled.div`
  position: relative;
  height: 60px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 3;
  }
`;

export const ShoppingCartBtnStyle = styled.button<IShoppingCartModalStyle>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;

  background-color: transparent;
  cursor: pointer;

  ${({ showCart }) =>
    showCart &&
    css`
      path {
        fill: ${({ theme }) => theme.colors.secondaryColorVeryDark};
      }
    `}
`;

export const ShoppingCartBtnItemAmountStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};

  position: absolute;

  top: 0px;
  left: 20px;

  border-radius: 20px 20px;

  height: 12px;
  width: 20px;

  color: ${({ theme }) => theme.colors.secondaryColorLight};
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;
