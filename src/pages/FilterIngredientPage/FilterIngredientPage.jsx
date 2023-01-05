import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './FilterIngredientPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {FILTER_RECIPES_BY_INGREDIENT_REQUEST} from "../../redux/actions/recipes";
import FilterForm from "../../components/FilterForm/FilterForm";
import MealCard from "../../components/MealCard/MealCard";
//_____________________________________________________________________________________

const FilterIngredientPage = () => {
  const params = useParams().mealName;
  const dispatch = useDispatch();
  const selectIngredientState = useSelector((state) => state.recipes.recipes);
  const selectIngredientLoading = useSelector((state) => state.recipes.loading);

  const [selectIngredient, setSelectIngredient] = useState(params)
  const onChangeSelectIngredient = (e) => {
    setSelectIngredient(e)
  }

  useEffect(() => {
    dispatch({
      type: FILTER_RECIPES_BY_INGREDIENT_REQUEST,
      payload: params,
    })
  }, [params, selectIngredient])

  return (
    <main className='filterIngredient container'>

      <BreadCrumbs name={params}/>

      <FilterForm
        searchValue={selectIngredient}
        onChangeSearchValue={setSelectIngredient}
      />

      {selectIngredientLoading
        ? <h3>Loading...</h3>
        : selectIngredientState
          ? <div className='mealsList'>
            {selectIngredientState.map((recipe) => (
              <MealCard meal={recipe} key={recipe.idMeal}/>
            ))
            }
          </div>
          : !selectIngredient || !params
            ? <h3>Enter search meal</h3>
            : <h3>No results</h3>
      }

    </main>
  );
};

export default FilterIngredientPage;