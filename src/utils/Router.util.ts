import { RouteConfig } from "../routes/Routes.d";
import routes from "../routes";

export const findPathByRouteNameAndSetParams = (
  name: string,
  variable?: { [key: string]: string | number },
  routeList: RouteConfig[] = routes
): string | undefined => {
  const routePath = findPathByRouteName(name, routeList);
  if (routePath && variable) {
    return setPathParams(routePath, variable);
  }
  return routePath;
};

export const findPathByRouteName = (
  name: string,
  routeList: RouteConfig[] = routes
): string | undefined => {
  for (const route of routeList) {
    if (route.name === name) {
      return route.path;
    }

    if (route.children) {
      const childPath = findPathByRouteName(name, route.children);

      if (route.path === "/") {
        return route.path + childPath;
      }

      if (childPath) {
        return `${route.path}/${childPath}`;
      }
    }
  }
  return undefined; // If the route is not found
};

export const setPathParams = (
  path: string,
  variable: { [key: string]: string | number }
): string => {
  let result: string = path;
  for (const key in variable) {
    if (variable.hasOwnProperty(key)) {
      const placeholder: string = `:${key}`;
      result = result.replace(placeholder, variable[key].toString());
    }
  }
  return result;
};
