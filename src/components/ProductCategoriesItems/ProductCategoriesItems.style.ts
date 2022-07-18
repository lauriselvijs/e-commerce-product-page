import styled from "styled-components";

export const ProductCategoriesItemStyle = styled.a`
  // FIXME: desktop size applied if resize from mobile to desktop
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryColorDark};
  padding-bottom: 50px;

  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
    border-bottom: 5px solid ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: -5px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding-bottom: 0px;
    color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
    font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
    font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
      border-bottom: none;
      margin-bottom: 0px;
    }
  }
`;
