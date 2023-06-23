import { Route } from "react-router-dom";
import { ReactElement } from "react";

import { RouteConfig } from "../../routes/Routes.d";

export const generateRoutes = (routes: RouteConfig[]): ReactElement[] => {
  return routes.map(({ path, element, children, index, name }) => {
    if (index) {
      return <Route key={name} index element={element} />;
    }

    if (!children) {
      return <Route key={name} path={path} element={element} />;
    }

    return (
      <Route key={name} path={path} element={element}>
        {generateRoutes(children)}
      </Route>
    );
  });
};
