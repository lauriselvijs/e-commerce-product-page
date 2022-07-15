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
    padding-left: 60px;
    padding-right: 120px;

    transition: padding-left 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-left: 0px;
    padding-right: 0px;

    padding-top: 0px;

    padding-bottom: 80px;
  }
`;
