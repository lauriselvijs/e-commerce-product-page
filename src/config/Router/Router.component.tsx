import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "../../components/Footer";
import AnimatedRouter from "./AnimatedRouter";

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <AnimatedRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
