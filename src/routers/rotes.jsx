import React from "react";
//_____________________________________________________________________________________
import HomePage from "../pages/HomePage/HomePage";
import SingleCategoryPage from "../pages/SingleCategoryPage/SingleCategoryPage";
import MealPage from "../pages/MealPage/MealPage";
//_____________________________________________________________________________________

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/:categoryName",
    component: <SingleCategoryPage/>,
    exact: true,
  },
  {
    path: "/:categoryName/:mealID",
    component: <MealPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <HomePage/>,
    exact: true,
  },
]