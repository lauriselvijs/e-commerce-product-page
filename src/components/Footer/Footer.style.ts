import styled from "styled-components/macro";

export const FooterStyle = styled.footer`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 20px;
  padding-bottom: 10px;
  z-index: -1;
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    height: 25vh;

    transition: height 0.5s;
  }
`;
