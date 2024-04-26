import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainContainer from "./container/MainContainer";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
]);

const Router = () => {
  return <RouterProvider router={Routers} />;
};

export default Router;
