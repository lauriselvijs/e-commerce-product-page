import styled from "styled-components";
import { motion } from "framer-motion";

export const NotFoundContainerStyle = styled(motion.div).attrs(() => ({
  initial: { y: window.innerHeight },
  animate: { y: 0 },
  transition: { type: "spring", stiffness: 60, velocity: 2 },
  exit: { y: 0 },
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
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
