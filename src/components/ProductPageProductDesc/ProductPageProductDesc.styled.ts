import styled from "styled-components/macro";
import { PrimaryBtnStyle } from "../../styles/shared/Button.style";

export const ProductPageProductDescStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 80px;

  width: 40%;
`;

export const ProductPageProductCompanyStyle = styled.div`
  text-transform: uppercase;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};

  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ProductPageMainInfoSectionStyle = styled.section``;

export const ProductPageProductNameStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
`;
export const ProductPageProductInfoStyle = styled.p`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};

  color: ${({ theme }) => theme.colors.secondaryColorDark};
`;

export const ProductPageProductPriceContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const ProductPageProductDiscPriceStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
`;
export const ProductPageProductPriceDiscPercentageBadgeStyle = styled.div`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};

  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.primaryColorLight};
  width: fit-content;
  padding: 1px 8px;
  border-radius: 8px;
`;
export const ProductPageProductRealPriceStyle = styled.div`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};

  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: line-through;
`;

export const ProductPageProductDescFooterStyle = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;

  padding-top: 30px;
`;

export const ProductPageQuantityBtnStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: none;
  border-radius: 10px;

  height: 55px;
  width: 160px;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
  background-color: ${({ theme }) => theme.colors.secondaryColorLight};
`;

export const ProductPageQuantityIncBtnStyle = styled.button`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
  height: 55px;
  width: 55px;

  top: 0px;
  left: 0px;
`;
export const ProductPageQuantityDecBtnStyle = styled.button`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  background-color: transparent;

  cursor: pointer;
  height: 55px;
  width: 55px;

  top: 0px;
  left: 105px;
`;

export const ProductPageQuantityIncStyle = styled.img``;
export const ProductPageQuantityDecStyle = styled.img``;
export const ProductPageAddToCartBtnStyle = styled(PrimaryBtnStyle)``;
