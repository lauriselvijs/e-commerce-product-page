import styled from "styled-components/macro";

export const ProductCategoriesStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  gap: 30px;

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
`;

export const ProductCategoriesItemStyle = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryColorDark};
  padding-bottom: 50px;

  :hover {
    color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
    border-bottom: 5px solid ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: -5px;
  }
`;
