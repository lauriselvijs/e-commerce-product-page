import styled from "styled-components/macro";

import {
  PrimaryBtnStyle,
  QuantityBtnStyle,
} from "../../styles/components/Button.style";
import {
  ParagraphStyle,
  PrimaryTextStyle,
} from "../../styles/components/Text.style";

export const ProductPageProductDescStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding-top: 20px;
    width: 90%;
  }
`;

export const ProductPageProductCompanyStyle = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
`;

export const ProductPageMainInfoSectionStyle = styled.section``;

export const ProductPageProductNameStyle = styled(PrimaryTextStyle)`
  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    margin-top: 10px;
  }
`;
export const ProductPageProductInfoStyle = styled(ParagraphStyle)`
  color: ${({ theme }) => theme.color.secondaryDark};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-bottom: 10px;
`;

export const ProductPageProductPriceContainerStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5vw;
    justify-content: space-between;
    width: 90%;
  }
`;
export const ProductPageProductDiscPriceStyle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.color.secondaryVeryDark};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  gap: 20px;
`;
export const ProductPageProductPriceDiscPercentageBadgeStyle = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLight};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
  padding: 0;
  padding: 1px 8px;
  text-align: center;
  vertical-align: center;
  width: fit-content;
`;
export const ProductPageProductRealPriceStyle = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-decoration: line-through;
`;

export const ProductPageProductDescFooterStyle = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  padding-top: 30px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
  }
`;

export const ProductPageQuantityBtnContainerStyle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondaryLight};
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.color.secondaryVeryDark};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  justify-content: center;
  min-height: 55px;
  position: relative;
  width: 100%;
`;

export const ProductPageQuantityDecBtnStyle = styled(QuantityBtnStyle)`
  right: 0;
  top: 0;

  :hover {
    opacity: 0.6;
  }
`;
export const ProductPageQuantityIncBtnStyle = styled(QuantityBtnStyle)`
  left: 0;
  top: 0;

  :hover {
    opacity: 0.6;
  }
`;

export const ProductPageQuantityIncIconStyle = styled.img``;
export const ProductPageQuantityDecIconStyle = styled.img``;
export const ProductPageAddToCartBtnStyle = styled(PrimaryBtnStyle)`
  align-items: center;
  box-shadow: 0px 20px 20px 0px ${({ theme }) => theme.color.primaryLight};
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;

  svg {
    path {
      fill: ${({ theme }) => theme.color.primaryVeryLight};
    }
  }
`;
