import styled from "styled-components/macro";

export const PageStyle = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-left: 320px;
  padding-right: 320px;
  padding-top: 80px;

  transition: padding-left 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding-left: 120px;
    padding-right: 120px;

    transition: padding-left 0.5s;
  }
`;
