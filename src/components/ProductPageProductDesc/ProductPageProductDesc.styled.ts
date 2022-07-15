import styled from "styled-components/macro";
import {
  PrimaryBtnStyle,
  QuantityBtnStyle,
} from "../../styles/shared/Button.style";

export const ProductPageProductDescStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 60px;

  width: 40%;

  transition: padding-top 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding-top: 0px;

    transition: padding-top 0.5s;
  }
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
  text-align: center;
  vertical-align: center;

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

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductPageQuantityBtnContainerStyle = styled.div`
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

  transition: width 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    width: 250px;

    transition: width 0.5s;
  }
`;

export const ProductPageQuantityIncBtnStyle = styled(QuantityBtnStyle)`
  top: 0px;
  left: 0px;
`;
export const ProductPageQuantityDecBtnStyle = styled(QuantityBtnStyle)`
  top: 0px;
  left: 105px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    left: 195px;

    transition: left 0.5s;
  }
`;

// TODO:
// []  - change to svg and target svg icon opacity on hover inside wrapper button
export const ProductPageQuantityIncIconStyle = styled.img``;
export const ProductPageQuantityDecIconStyle = styled.img``;
export const ProductPageAddToCartBtnStyle = styled(PrimaryBtnStyle)`
  width: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  svg {
    transform: scale(0.8);
    path {
      fill: ${({ theme }) => theme.colors.primaryColorVeryLight};
    }
  }

  box-shadow: 0px 20px 20px 0px ${({ theme }) => theme.colors.primaryColorLight}; ;
`;
