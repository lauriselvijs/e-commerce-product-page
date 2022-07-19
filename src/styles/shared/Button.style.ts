import styled from "styled-components/macro";
import { ISecondaryBtnStyle } from "../../types/Button.style";

export const PrimaryBtnStyle = styled.button`
  height: 55px;
  width: 340px;

  color: ${({ theme }) => theme.colors.secondaryColorLight};
  background-color: ${({ theme }) => theme.colors.primaryColor};

  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};

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

export const SecondaryBtnStyle = styled.button<ISecondaryBtnStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const QuantityBtnStyle = styled.button`
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
