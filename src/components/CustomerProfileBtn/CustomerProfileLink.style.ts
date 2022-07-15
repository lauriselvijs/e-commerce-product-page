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

  transition: width 0.5s, height 0.5s;

  :hover {
    outline: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    order: 4;
    margin-top: 2px;

    width: 22px;
    height: 22px;

    transition: width 0.5s, height 0.5s;
  }
`;

export const CustomerProfilePicStyle = styled.img`
  :hover {
    filter: contrast(120%);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    width: 22px;
    height: 22px;

    transition: width 0.5s, height 0.5s;
  }
`;
