import React from "react";
//_____________________________________________________________________________________
import RecipesPage from "../pages/RecipesCategoriesPage/RecipesCategoriesPage";
//_____________________________________________________________________________________

export const privateRoutes = [
  {
    path: "/",
    component: <RecipesPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <RecipesPage/>,
    exact: true,
  },
]