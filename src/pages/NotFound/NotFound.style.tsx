import styled from "styled-components";

export const NotFoundContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

export const NotFoundTextStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.large};
  text-align: center;

  color: ${({ theme }) => theme.color.secondaryDark};
`;

export const NotFoundUrlStyle = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.color.secondary};

  :hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
