import styled from "styled-components/macro";

export const ProductCategoriesStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  gap: 30px;

  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.medium};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: none;
  }
`;

export const HamburgerMenuBtnContainerStyle = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 1;
    display: block;

    padding-top: 2px;
  }
`;

export const HamburgerMenuBtnStyle = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: block;

    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export const HamburgerMenuIconStyle = styled.img`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: block;
  }
`;

export const ProductCategoriesItemStyle = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondaryDark};
  padding-bottom: 50px;

  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.color.secondaryVeryDark};
    border-bottom: 5px solid ${({ theme }) => theme.color.primary};
    margin-bottom: -5px;
  }
`;
