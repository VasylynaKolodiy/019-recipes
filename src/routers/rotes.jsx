import React from "react";
//_____________________________________________________________________________________
import HomePage from "../pages/HomePage/HomePage";
import SingleCategoryPage from "../pages/SingleCategoryPage/SingleCategoryPage";
import MealPage from "../pages/MealPage/MealPage";
import AlphabetPage from "../pages/AlphabetPage/AlphabetPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import FilterIngredientPage from "../pages/FilterIngredientPage/FilterIngredientPage";
//_____________________________________________________________________________________

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/:categoryType/:categoryName",
    component: <SingleCategoryPage/>,
    exact: true,
  },
  {
    path: "/meal/:mealID",
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
    path: "/ingredient/:ingredient",
    component: <FilterIngredientPage/>,
    exact: true,
  },
  {
    path: "/ingredient",
    component: <FilterIngredientPage/>,
    exact: true,
  },
  {
    path: "*",
    component: <HomePage/>,
    exact: true,
  },
]