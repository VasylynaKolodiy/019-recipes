import React from "react";
//_____________________________________________________________________________________
import RecipesCategoriesPage from "../pages/RecipesCategoriesPage/RecipesCategoriesPage";
import SingleCategoryPage from "../pages/SingleCategoryPage/SingleCategoryPage";
//_____________________________________________________________________________________

export const privateRoutes = [
  {
    path: "/",
    component: <RecipesCategoriesPage/>,
    exact: true,
  },
  {
    path: "/categories",
    component: <RecipesCategoriesPage/>,
    exact: true,
  },
  {
    path: "/categories/:categoryName",
    component: <SingleCategoryPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <RecipesCategoriesPage/>,
    exact: true,
  },
]