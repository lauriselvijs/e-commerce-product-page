import styled from "styled-components/macro";

export const ShoppingCartModalTitleStyle = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-weight: ${({ theme }) => theme.font.weight.bold};

  color: ${({ theme }) => theme.color.secondaryVeryDark};

  border-bottom: 3px solid ${({ theme }) => theme.color.secondaryLight};
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
  color: ${({ theme }) => theme.color.secondaryVeryDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const ShoppingCartModalProductImageStyle = styled.img`
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding-right: 10px;
  }
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
