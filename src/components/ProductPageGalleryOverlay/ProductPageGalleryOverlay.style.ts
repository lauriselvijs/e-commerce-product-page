import styled from "styled-components/macro";

export const ProductPageGalleryOverlayModalStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const ProductPageGalleryOverlayModalCloseBtnStyle = styled.button`
  position: absolute;

  transform: scale(1.2);

  background-color: transparent;
  border: none;

  top: -6%;
  left: 95%;

  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.colors.primaryColorVeryLight};
  }

  :hover path {
    fill: ${({ theme }) => theme.colors.primaryColor};
  }
`;
