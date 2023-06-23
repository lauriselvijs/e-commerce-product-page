import { Navigate } from "react-router-dom";

import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";
import Layout from "../pages/shared/Layout";
import { SHOES } from "../constants/Products.const";

import { RouteConfig } from "./Routes.d";

const routes: RouteConfig[] = [
  {
    name: "home.layout",
    path: "/",
    element: <Layout />,
    children: [
      {
        name: "home.index",
        index: true,
        element: <Navigate to={`product-page/{${SHOES.product_id}`} />,
      },
      {
        path: "product-page",
        element: <ProductPage />,
        name: "product-page",
        children: [
          {
            name: "product-page.show",
            path: ":productId",
            element: <ProductPage />,
          },
        ],
      },
      {
        name: "user-page.index",
        path: "user-profile",
        element: null,
        children: [
          {
            path: ":userId",
            element: null,
            name: "user-profile.show",
            children: [
              {
                name: "user-profile.single.comments.index",
                path: "comments",
                element: null,
              },
            ],
          },
        ],
      },
      {
        name: "checkout",
        path: "checkout",
        element: null,
      },
    ],
  },
  {
    name: "not-found",
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
