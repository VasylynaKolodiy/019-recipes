import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './SearchResultsPage.scss'
import {SEARCH_MEAL_BY_NAME_REQUEST} from "../../redux/actions/recipes";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import FilterForm from "../../components/FilterForm/FilterForm";
import MealCard from "../../components/MealCard/MealCard";
//_____________________________________________________________________________________

const SearchResultsPage = () => {

  const params = useParams().mealName;
  const dispatch = useDispatch();
  const searchMealsState = useSelector((state) => state.recipes.recipes);
  const searchMealsLoading = useSelector((state) => state.recipes.loading);

  const [searchMeal, setSearchMeal] = useState(params)

  const onChangeSearchMeal = (e) => {
    setSearchMeal(e)
  }

  console.log(searchMealsState, 'searchMealsState')

  useEffect(() => {
    dispatch({
      type: SEARCH_MEAL_BY_NAME_REQUEST,
      payload: params,
    })

  }, [params])

  return (
    <main className='searchResults container'>

      <BreadCrumbs name={params}/>

      <FilterForm searchValue={searchMeal} onChangeSearchValue={onChangeSearchMeal}/>

      {searchMealsLoading
        ? <h3>Loading...</h3>
        : searchMealsState
          ? <div className='mealsList'>
            {searchMealsState.map((recipe) => (
              <MealCard meal={recipe} key={recipe.idMeal}/>
            ))
            }
          </div>
          : !searchMeal || !params
            ? <h3>Enter search meal</h3>
            : <h3>No results</h3>
      }

    </main>
  );
};

export default SearchResultsPage;