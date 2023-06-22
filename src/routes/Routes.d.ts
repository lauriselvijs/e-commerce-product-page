import { ReactNode } from "react";

export interface RouteConfig {
  id: string | number;
  path?: string;
  element: ReactNode | null;
  index?: true;
  children?: RouteConfig[];
  wrapper?: true;
}
