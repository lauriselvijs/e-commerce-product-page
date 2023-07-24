import styled from "styled-components/macro";
import { IOverlayStyle } from "../../types/styles/Overlay.style";

export const OverlayStyle = styled.div<IOverlayStyle>`
  display: ${({ selected }) => (selected ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.overlay};
`;
