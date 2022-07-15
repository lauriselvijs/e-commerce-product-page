import styled from "styled-components/macro";

export const ProductPageGalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    padding: 0px;
  }
`;
