import styled from "styled-components/macro";

export const LogoIconStyle = styled.img`
  cursor: pointer;
`;

export const LogoStyle = styled.a`
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 2;
    flex: 1;
  }
`;
