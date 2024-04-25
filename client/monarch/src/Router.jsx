import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainContainer from "./container/MainContainer";
import Content from "./components/sleeve-content/Content";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "sleeve",
        element: <Content />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={Routers} />;
};

export default Router;
