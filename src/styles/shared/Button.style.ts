import styled from "styled-components/macro";

export const PrimaryBtnStyle = styled.button`
  height: 55px;
  width: 340px;

  color: ${({ theme }) => theme.color.secondaryLight};
  background-color: ${({ theme }) => theme.color.primary};

  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.small};

  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    opacity: 0.4;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    width: 80vw;

    :hover {
      opacity: 1;
    }
  }
`;

export const SecondaryBtnStyle = styled.button`
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const QuantityBtnStyle = styled.button`
  /* TODO: 
  [ ] - remove absolute position from global styling */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
  height: 55px;
  width: 55px;
`;
