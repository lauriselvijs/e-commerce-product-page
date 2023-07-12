import styled from "styled-components/macro";

export const ProductPageGalleryStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 476px;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 20px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding: 0px;
  }
`;

export const ProductPageGalleryImgContainerStyle = styled.div`
  margin: 0;
  padding: 0;

  cursor: zoom-in;

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    cursor: default;
    width: 100vw;
    height: auto;
  }
`;
