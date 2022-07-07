import styled from "styled-components/macro";

export const CustomerProfileBtnStyle = styled.button`
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

export const CustomerProfileBtnImageStyle = styled.img`
  :hover {
    filter: contrast(120%);
  }
`;

export const CustomerProfileBtnLinkStyle = styled.a`
  text-decoration: none;
`;
