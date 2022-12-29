import styled from "styled-components/macro";

export const CustomerProfileStyle = styled.div`
  align-self: flex-start;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 42px;
  margin-top: -8px;
  padding: 0px;
  text-decoration: none;
  transition: width 0.5s, height 0.5s;
  width: 42px;

  :hover {
    outline: 1px solid ${({ theme }) => theme.color.primary};
    filter: contrast(120%);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    height: 22px;
    margin-top: 2px;
    order: 4;
    transition: width 0.5s, height 0.5s;
    width: 22px;
  }
`;

export const CustomerProfilePicStyle = styled.img`
  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    height: 22px;
    transition: width 0.5s, height 0.5s;
    width: 22px;
  }
`;
