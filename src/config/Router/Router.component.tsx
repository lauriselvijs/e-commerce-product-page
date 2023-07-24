import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "../../components/Footer";
import AnimatedRouter from "./AnimatedRouter";
import Navbar from "../../components/Navbar";

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <AnimatedRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
