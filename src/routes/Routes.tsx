import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";
import Layout from "../pages/shared/Layout";
import { SHOES } from "../constants/Products.const";
import { RouteConfig } from "./Routes.d";

const routes: RouteConfig[] = [
  {
    id: "home.layout",
    path: "/",
    element: <Layout />,
    children: [
      {
        id: "home.index",
        index: true,
        element: <Navigate to={`product-page/{${SHOES.product_id}`} />,
      },
      {
        path: "product-page",
        element: <ProductPage />,
        id: "product-page",
        children: [
          {
            id: "product-page.show",
            path: ":productId",
            element: <ProductPage />,
          },
        ],
      },
      {
        id: "user-page.index",
        path: "user-profile",
        element: null,
        children: [
          {
            path: ":userId",
            element: null,
            id: "user-profile.show",
            children: [
              {
                id: "user-profile.single.comments",
                path: "comments",
                element: null,
              },
            ],
          },
        ],
      },
      {
        path: "checkout",
        element: null,
        id: "checkout",
      },
    ],
  },
  {
    id: "not-found",
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
