import styled from "styled-components/macro";
import { IListStyle } from "../../types/List.style.d";

export const ProductCategoriesItemsStyle = styled.div<IListStyle>`
  display: flex;
  align-items: flex-start;
  flex: 1;
  gap: 30px;

  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.medium};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: ${({ showOnMobile }) => (showOnMobile ? "flex" : "none")};
    flex-direction: column;
    padding-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    max-width: 50%;
    overflow: auto;
  }
`;
