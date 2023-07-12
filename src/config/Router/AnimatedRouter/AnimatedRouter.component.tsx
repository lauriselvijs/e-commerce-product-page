import { AnimatePresence } from "framer-motion";
import { Routes, useLocation } from "react-router-dom";

import { generateRoutes } from "../Router.config";

import routes from "../../../routes";

const AnimatedRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {generateRoutes(routes)}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;
