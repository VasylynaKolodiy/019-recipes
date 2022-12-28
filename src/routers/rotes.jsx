import React from "react";
//_____________________________________________________________________________________
import HomePage from "../pages/HomePage/HomePage";
import SingleCategoryPage from "../pages/SingleCategoryPage/SingleCategoryPage";
//_____________________________________________________________________________________

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/categories",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/categories/:categoryName",
    component: <SingleCategoryPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <HomePage/>,
    exact: true,
  },
]