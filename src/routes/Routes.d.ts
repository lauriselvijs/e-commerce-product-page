import { ReactNode } from "react";

export interface RouteConfig {
  name: string | number;
  path?: string;
  element: ReactNode | null;
  index?: true;
  children?: RouteConfig[];
}

export interface RouteItem {
  path: string;
  name: string;
}
