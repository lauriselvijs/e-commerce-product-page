import styled from "styled-components/macro";

export const LogoIconStyle = styled.img`
  cursor: pointer;
`;

export const LogoStyle = styled.a`
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    flex: 1;
    order: 2;
    overflow: auto;
  }
`;
