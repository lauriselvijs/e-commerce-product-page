import styled from "styled-components/macro";

export const NavbarStyle = styled.nav`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 5px;
  margin-left: 120px;
  margin-right: 195px;

  padding-right: 80px;

  gap: 40px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
`;
