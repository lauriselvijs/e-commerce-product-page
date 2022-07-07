import styled from "styled-components/macro";

export const PrimaryBtnStyle = styled.button`
  height: 55px;
  width: 340px;

  color: ${({ theme }) => theme.colors.secondaryColorLight};
  background-color: ${({ theme }) => theme.colors.primaryColor};

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};

  border: none;
  border-radius: 10px;

  cursor: pointer;
`;
