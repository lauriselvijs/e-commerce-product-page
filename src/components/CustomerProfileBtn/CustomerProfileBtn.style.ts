import styled from "styled-components/macro";

export const CustomerProfileBtnStyle = styled.button`
  border: none;
  border-radius: 50%;

  position: absolute;

  top: 30px;
  right: 0px;

  width: 42px;
  height: 42px;

  padding: 0px;

  background-color: transparent;

  cursor: pointer;

  :hover {
    outline: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

// TODO:
// [] - check if needed if isn't needed delete
export const CustomerProfileBtnImage = styled.img`
  :hover {
    filter: contrast(120%);
  }
`;
