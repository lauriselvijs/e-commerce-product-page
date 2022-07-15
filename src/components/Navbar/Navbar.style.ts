import styled from "styled-components/macro";

export const NavbarStyle = styled.nav`
  position: relative;

  display: flex;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 5px;
  margin-left: 120px;
  margin-right: 195px;

  gap: 40px;

  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryColorLight};

  transition: margin-left 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    gap: 20px;

    margin-left: 60px;
    margin-right: 60px;

    transition: margin-left 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    margin: 0;
    padding: 0;

    border-bottom: none;
    align-items: flex-start;
    justify-content: center;

    padding-top: 20px;
    padding-right: 20px;
    padding-left: 15px;

    transition: padding-left 0.5s;

    gap: 20px;
    height: 40px;
  }
`;
