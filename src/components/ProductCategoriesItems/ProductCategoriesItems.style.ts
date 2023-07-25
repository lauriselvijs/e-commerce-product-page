import styled, { css } from "styled-components";

export interface ProductCategoriesItemStyleProps {
  $selected: boolean;
}

const selectedLink = css`
  color: ${({ theme }) => theme.color.secondaryVeryDark};
  border-bottom: 5px solid ${({ theme }) => theme.color.primary};
  margin-bottom: -5px;
`;

export const ProductCategoriesItemStyle = styled.div<ProductCategoriesItemStyleProps>`
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondaryDark};
    border-bottom: 0 solid ${({ theme }) => theme.color.primary};
    padding-bottom: 50px;
    text-decoration: none;
    transition: border-bottom 0.2s linear;

    ${({ $selected }) => $selected && selectedLink}

    :hover {
      ${selectedLink}
    }

    @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
      padding-bottom: 0px;
      color: ${({ theme }) => theme.color.secondaryVeryDark};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.medium};
      text-decoration: none;

      :hover {
        color: ${({ theme }) => theme.color.secondaryVeryDark};
        border-bottom: none;
        margin-bottom: 0px;
      }
    }
  }
`;
