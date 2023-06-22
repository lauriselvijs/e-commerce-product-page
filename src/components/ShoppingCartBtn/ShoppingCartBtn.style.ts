import styled, { css } from "styled-components/macro";

export const ShoppingCartBtnContainerStyle = styled.div`
  height: 60px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 3;
  }
`;

export const ShoppingCartBtnStyle = styled.button<{ showCart: boolean }>`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 32px;
  width: 32px;

  ${({ showCart }) =>
    showCart &&
    css`
      path {
        fill: ${({ theme }) => theme.color.secondaryVeryDark};
      }
    `}
`;

export const ShoppingCartBtnItemAmountStyle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 20px 20px;
  color: ${({ theme }) => theme.color.secondaryLight};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 12px;
  justify-content: center;
  left: 20px;
  position: absolute;
  top: 0px;
  width: 20px;
`;
