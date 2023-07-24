import styled from "styled-components";
import { motion } from "framer-motion";

export const NotFoundContainerStyle = styled(motion.div).attrs(() => ({
  initial: { position: "absolute", top: window.innerHeight },
  animate: { top: 0, position: "relative" },
  transition: { type: "spring", duration: 1, bounce: 0.4 },
  // exit: { position: "absolute", top: -window.innerHeight },
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const NotFoundTextStyle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.large};
  text-align: center;

  color: ${({ theme }) => theme.color.secondaryDark};
`;

export const NotFoundUrlStyle = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.color.secondary};

  :hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
