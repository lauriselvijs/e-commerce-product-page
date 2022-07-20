import styled from "styled-components/macro";

export const PrimaryTextStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeLarge};

  color: ${({ theme }) => theme.colors.secondaryColorVeryDark};
`;
export const SecondaryTextStyle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeSmall};
`;
export const ParagraphStyle = styled.p`
  line-height: 26px;

  font-size: ${({ theme }) => theme.typography.fontSize.fontSizeMedium};
  font-weight: ${({ theme }) => theme.font.fontWeight.fontWeightMedium};

  color: ${({ theme }) => theme.colors.secondaryColorDark};
`;
