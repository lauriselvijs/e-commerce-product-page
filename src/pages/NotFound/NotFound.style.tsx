import styled from "styled-components";

export const NotFoundContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

export const NotFoundTextStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};
  text-align: center;

  color: ${({ theme }) => theme.colors.secondaryColorDark};
`;

export const NotFoundUrlStyle = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.secondaryColor};

  :hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
