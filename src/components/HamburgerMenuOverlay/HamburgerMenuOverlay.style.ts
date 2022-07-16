import styled from "styled-components/macro";
import { OverlayStyle } from "../../styles/shared/Overlay.style";

export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  // enter from
  .fade-enter {
    background-color: green;
  }

  // enter to
  .fade-enter-active {
    background-color: red;
  }

  // exit from
  .fade-exit {
    background-color: blue;
  }

  // exit to
  .fade-exit-active {
    background-color: black;
  }
`;

// TODO:
// [] - add animation on modal enter and leave
export const HamburgerMenuOverlayModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.primaryColorVeryLight};

  width: 60vw;
  height: 100vh;

  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
`;

export const HamburgerMenuOverlayModalCloseBtnStyle = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;
export const HamburgerMenuOverlayModalCloseBtnIconStyle = styled.img``;
