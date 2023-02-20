import styled from "styled-components/macro";

export const PrimaryTextStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.large};

  color: ${({ theme }) => theme.color.secondaryVeryDark};
`;
export const SecondaryTextStyle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.small};
`;
export const ParagraphStyle = styled.p`
  line-height: 26px;

  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: ${({ theme }) => theme.color.secondaryDark};
`;
