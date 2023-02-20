import styled from "styled-components/macro";

export const FooterStyle = styled.footer`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding-bottom: 10px;
  z-index: -1;
  font-size: ${({ theme }) => theme.font.size.small};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    flex-direction: column;
  }
`;
