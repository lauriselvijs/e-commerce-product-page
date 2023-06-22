import { Routes, BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";

import Footer from "../../components/Footer";
import { RouteConfig } from "../../routes/Routes.d";

import { generateRoutes } from "./Router.config";

const Router = ({ routes }: { routes: RouteConfig[] }): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>{generateRoutes(routes)}</Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
