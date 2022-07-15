import styled from "styled-components/macro";

export const LogoLinkContainerStyle = styled.div`
  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 2;
    flex: 1;
  }
`;

export const LogoStyle = styled.img`
  cursor: pointer;
`;

export const LogoLinkStyle = styled.a`
  text-decoration: none;
`;
