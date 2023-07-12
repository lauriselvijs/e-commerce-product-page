import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { pageStyleVariant } from "./Page.config";

export const PageStyle = styled(motion.div).attrs(() => ({
  initial: "enter",
  variants: pageStyleVariant,
  animate: "default",
  exit: "leave",
  transition: { type: "spring", stiffness: 60, velocity: 2 },
}))`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
  flex: 1;

  transition: padding-left 0.5s;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding-left: 60px;
    padding-right: 120px;

    transition: padding-left 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-left: 0px;
    padding-right: 0px;

    padding-top: 0px;

    padding-bottom: 80px;
  }
`;
