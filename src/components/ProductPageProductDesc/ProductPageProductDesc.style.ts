import styled from "styled-components/macro";
import {
  PrimaryBtnStyle,
  QuantityBtnStyle,
} from "../../styles/shared/Button.style";
import {
  ParagraphStyle,
  PrimaryTextStyle,
} from "../../styles/shared/Text.style";

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

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding-top: 20px;

    width: 90%;
  }
`;

export const ProductPageProductCompanyStyle = styled.div`
  text-transform: uppercase;

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};

  color: ${({ theme }) => theme.color.primary};
`;

export const ProductPageMainInfoSectionStyle = styled.section``;

export const ProductPageProductNameStyle = styled(PrimaryTextStyle)`
  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    margin-top: 10px;
  }
`;
export const ProductPageProductInfoStyle = styled(ParagraphStyle)`
  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: ${({ theme }) => theme.color.secondaryDark};

  padding-bottom: 10px;
`;

export const ProductPageProductPriceContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    gap: 5vw;
  }
`;
export const ProductPageProductDiscPriceStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.large};

  color: ${({ theme }) => theme.color.secondaryVeryDark};
`;
export const ProductPageProductPriceDiscPercentageBadgeStyle = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  vertical-align: center;

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};

  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.primaryLight};
  width: fit-content;
  padding: 1px 8px;
  border-radius: 8px;
`;
export const ProductPageProductRealPriceStyle = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.medium};

  color: ${({ theme }) => theme.color.secondary};
  text-decoration: line-through;
`;

export const ProductPageProductDescFooterStyle = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;

  padding-top: 30px;

  transition: padding-top 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: padding-top 0.5s;
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

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.medium};

  color: ${({ theme }) => theme.color.secondaryVeryDark};
  background-color: ${({ theme }) => theme.color.secondaryLight};

  transition: width 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    width: 250px;

    transition: width 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    width: 85vw;

    transition: width 0.5s;
  }
`;

export const ProductPageQuantityDecBtnStyle = styled(QuantityBtnStyle)`
  top: 0px;
  left: 105px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    left: 195px;

    transition: left 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    left: 72vw;

    transition: left 0.5s;
  }

  :hover {
    opacity: 0.6;
  }
`;
export const ProductPageQuantityIncBtnStyle = styled(QuantityBtnStyle)`
  top: 0px;
  left: 0px;

  :hover {
    opacity: 0.6;
  }
`;

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
      fill: ${({ theme }) => theme.color.primaryVeryLight};
    }
  }

  box-shadow: 0px 20px 20px 0px ${({ theme }) => theme.color.primaryLight};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    width: 85vw;

    transition: width 0.5s;
  }
`;
