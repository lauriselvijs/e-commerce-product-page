import styled from "styled-components/macro";
import { OverlayStyle } from "../../styles/shared/Overlay.style";
import { IHamburgerMenuOverlayModalCloseBtnStyle } from "./HamburgerMenuOverlay.style.d";

export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .slide-enter {
    width: 0;
  }
  .slide-enter-active {
    width: 60vw;
    transition: width 200ms;
  }

  .slide-exit-active {
    padding: 0;
    margin: 0;

    width: 0vw;

    transition: width 200ms;
  }
`;

export const HamburgerMenuOverlayModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.color.primaryVeryLight};

  // animation-duration: 200ms;
  // animation-name: slide-in;

  // @keyframes slide-in {
  //   from {
  //     width: 0vw;
  //   }

  //   to {
  //     width: 60vw;
  //   }
  // }

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
export const HamburgerMenuOverlayModalCloseBtnIconStyle = styled.img<IHamburgerMenuOverlayModalCloseBtnStyle>`
  display: ${({ show }) => (show ? "block" : "none")};
`;
