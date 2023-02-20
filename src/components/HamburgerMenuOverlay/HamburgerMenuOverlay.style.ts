import styled from "styled-components/macro";

import { OverlayStyle } from "../../styles/components/Overlay.style";

import { IHamburgerMenuOverlayModalCloseBtnStyle } from "./HamburgerMenuOverlay.style.d";

export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

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

    transition: width 200ms;
    width: 0vw;
  }
`;

export const HamburgerMenuOverlayModalStyle = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.primaryVeryLight};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-top: 30px;
  width: 60vw;
`;

export const HamburgerMenuOverlayModalCloseBtnStyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const HamburgerMenuOverlayModalCloseBtnIconStyle = styled.img<IHamburgerMenuOverlayModalCloseBtnStyle>`
  display: ${({ show }) => (show ? "block" : "none")};
`;
