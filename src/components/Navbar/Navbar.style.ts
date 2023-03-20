import styled from "styled-components/macro";

export const NavbarStyle = styled.nav`
  align-items: flex-start;
  border-bottom: 3px solid ${({ theme }) => theme.color.secondaryLight};
  display: flex;
  gap: 40px;
  margin-left: 120px;
  margin-right: 195px;
  padding-bottom: 5px;
  padding-top: 40px;
  position: relative;
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

    align-items: flex-start;
    border-bottom: none;
    gap: 20px;
    height: 40px;
    justify-content: center;
    padding-left: 15px;
    padding-right: 20px;
    padding-top: 20px;
    transition: padding-left 0.5s;
  }
`;
