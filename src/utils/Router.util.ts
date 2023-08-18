import { RouteConfig, RouteItem } from "../routes/Routes.d";
import routes from "../routes";

export const generateRouteList = (
  routeList: RouteConfig[] = routes,
  parentPath = ""
): RouteItem[] => {
  const result: RouteItem[] = [];

  routeList.forEach((route) => {
    const { path, children, name } = route;

    const fullPath = parentPath ? `${parentPath}/${path || ""}` : path;

    if (fullPath) {
      result.push({ path: fullPath !== "/" && fullPath !== "*" ? "/" + fullPath : fullPath, name: name ? name.toString() : "" });
    }

    if (children) {
      const childRoutes = generateRouteList(children, fullPath);
      result.push(...childRoutes);
    }
  });

  return result;
};

const memoizeGenerateRouteList = (() => {
  let cache: RouteItem[] | null = null;

  return () => {
    if (!cache) {
      cache = generateRouteList();
    }
    return cache;
  };
})();

export const route = (
  routeName: string,
  params?: { [key: string]: string }
): string => {
  const routeList: RouteItem[] = memoizeGenerateRouteList();
  const route: RouteItem | undefined = routeList.find(
    (route) => route.name === routeName
  );

  if (!route) {
    throw new Error(
      `Route "${routeName}" not found. \nPossible routes are:\n${routeList
        .map((route) => route.name)
        .join("\n")}`
    );
  }

  const routePath: string[] = route.path.split("/").map((path) => {
    if (path.startsWith(":")) {
      if (!params) {
        throw new Error(`Param ${path.replace(":", "")} is missing.`);
      }
      
      const paramName: string = path.slice(1);

      return params[paramName] || path;
    }
    return path;
  });

  if (routePath[0]) {
    return "/" + routePath.join("/");
  }

  return routePath.join("/");
};
