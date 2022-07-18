import styled from "styled-components/macro";
import { OverlayStyle } from "../../styles/shared/Overlay.style";

interface IHamburgerMenuOverlayModalCloseBtnStyle {
  show: boolean;
}

export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  // enter from
  .slide-in-enter {
    padding: 0;
    margin: 0;

    width: 0vw;
  }

  // enter to
  .slide-in-enter-active {
    width: 60vw;

    transition: width 200ms;
  }

  // exit from
  .slide-in-exit {
    width: 60vw;
  }

  // exit to
  .slide-in-exit-active {
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
export const HamburgerMenuOverlayModalCloseBtnIconStyle = styled.img<IHamburgerMenuOverlayModalCloseBtnStyle>`
  display: ${({ show }) => (show ? "block" : "none")};
`;
