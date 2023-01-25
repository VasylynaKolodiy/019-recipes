import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@mui/material/Pagination";
//_____________________________________________________________________________________
import './SearchResultsPage.scss'
import {SEARCH_MEAL_BY_NAME_REQUEST} from "../../redux/actions/recipes";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import SearchForm from "../../components/SearchForm/SearchForm";
import MealCard from "../../components/MealCard/MealCard";
import SkeletonsCategoriesList from "../../components/Skeletons/SkeletonsCategoriesList";
//_____________________________________________________________________________________

const SearchResultsPage = () => {

  const {mealName} = useParams();
  const dispatch = useDispatch();
  const searchMealsState = useSelector((state) => state.recipes.recipes);
  const searchMealsLoading = useSelector((state) => state.recipes.loading);
  const [searchMeal, setSearchMeal] = useState(mealName)

  const LIMIT_SEARCH = 15;
  const [pageNumber, setPageNumber] = useState(1);
  const TOTAL_COUNT = searchMealsState?.length;
  let countOfPages = TOTAL_COUNT && Math.ceil(TOTAL_COUNT / LIMIT_SEARCH);

  useEffect(() => {
    dispatch({
      type: SEARCH_MEAL_BY_NAME_REQUEST,
      payload: mealName,
    })
  }, [mealName])

  const onChangeSearchMeal = (e) => {
    setSearchMeal(e)
    setPageNumber(1)
  }
  return (
    <main className='searchResults container'>

      <BreadCrumbs name={mealName}/>

      <SearchForm
        searchValue={searchMeal}
        onChangeSearchValue={onChangeSearchMeal}
      />

      {searchMealsLoading
        ? <SkeletonsCategoriesList />
        : searchMealsState
          ? <div className='mealsList'>
            {searchMealsState?.slice(pageNumber * LIMIT_SEARCH - LIMIT_SEARCH, pageNumber * LIMIT_SEARCH).map((recipe) => (
              <MealCard
                meal={recipe}
                category={recipe?.strCategory}
                key={recipe.idMeal}/>
            ))
            }
          </div>
          : !searchMeal || !mealName
            ? <h3>Enter search meal</h3>
            : <h3>No results</h3>
      }

      {countOfPages > 1 &&
      (<Pagination
          className='pagination'
          count={countOfPages}
          size="medium"
          page={pageNumber}
          onChange={(event, value) => setPageNumber(value)}
        />
      )}

    </main>
  );
};

export default SearchResultsPage;