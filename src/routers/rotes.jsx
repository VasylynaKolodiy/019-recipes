import React from "react";
//_____________________________________________________________________________________
import HomePage from "../pages/HomePage/HomePage";
import SingleCategoryPage from "../pages/SingleCategoryPage/SingleCategoryPage";
import MealPage from "../pages/MealPage/MealPage";
import AlphabetPage from "../pages/AlphabetPage/AlphabetPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
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
    path: "/alphabet",
    component: <AlphabetPage/>,
    exact: true,
  },
  {
    path: "/search/:mealName",
    component: <SearchResultsPage/>,
    exact: true,
  },
  {
    path: "/search",
    component: <SearchResultsPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <HomePage/>,
    exact: true,
  },
]