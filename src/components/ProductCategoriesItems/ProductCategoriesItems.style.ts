import styled from "styled-components";

export const ProductCategoriesItemStyle = styled.div`
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondaryDark};
    padding-bottom: 50px;

    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.color.secondaryVeryDark};
      border-bottom: 5px solid ${({ theme }) => theme.color.primary};
      margin-bottom: -5px;
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
