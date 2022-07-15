import styled from "styled-components/macro";
import { OverlayStyle } from "../../styles/shared/Overlay.style";

export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

  animation-duration: 0.5s;
  animation-name: slide-in;

  @keyframes slide-in {
    from {
      width: 0vw;
    }

    to {
      width: 60vw;
    }
  }
`;

export const HamburgerMenuOverlayModalCloseBtnStyle = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;
export const HamburgerMenuOverlayModalCloseBtnIconStyle = styled.img``;
