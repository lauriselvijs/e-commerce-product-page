import styled from "styled-components/macro";

export const CustomerProfileLinkStyle = styled.a`
  text-decoration: none;

  border: none;
  border-radius: 50%;

  align-self: flex-start;

  margin-top: -8px;

  width: 42px;
  height: 42px;

  padding: 0px;

  background-color: transparent;

  cursor: pointer;

  :hover {
    outline: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const CustomerProfilePicStyle = styled.img`
  :hover {
    filter: contrast(120%);
  }
`;
