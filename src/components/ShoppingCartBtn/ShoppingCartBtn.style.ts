import styled from "styled-components/macro";

export const ShoppingCartBtnStyle = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

// FIXME:
// [] - make cart color change when hovered over cart item counter
export const ShoppingCartBtnIconStyle = styled.img`
  :hover {
    filter: hue-rotate(0deg) saturate(0%) brightness(0%);
  }
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
