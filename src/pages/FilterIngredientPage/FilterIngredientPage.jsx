import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './FilterIngredientPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {FILTER_RECIPES_BY_INGREDIENT_REQUEST, GET_ALL_INGREDIENTS_REQUEST} from "../../redux/actions/recipes";
import MealCard from "../../components/MealCard/MealCard";
import FilterIngredientForm from "../../components/FilterIngredientForm/FilterIngredientForm";
//_____________________________________________________________________________________

const FilterIngredientPage = () => {
  const params = useParams().ingredient;
  const dispatch = useDispatch();
  const selectIngredientState = useSelector((state) => state.recipes.recipes);
  const selectIngredientLoading = useSelector((state) => state.recipes.loading);
  const ingredientsState = useSelector((state) => state.recipes.ingredients);

  const [selectIngredient, setSelectIngredient] = useState((params?.split(',')) || [])
  const navigate = useNavigate();

  function onChangeSelectIngredient(event, values) {
    setSelectIngredient(values)
    navigate(`/ingredient/${values}`)
  }

  useEffect(() => {
    dispatch({
      type: GET_ALL_INGREDIENTS_REQUEST,
      payload: params,
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: FILTER_RECIPES_BY_INGREDIENT_REQUEST,
      payload: params || '',
    })

  }, [params, selectIngredient])


  return (
    <main className='filterIngredient container'>

      <BreadCrumbs name={params}/>

      <FilterIngredientForm
        ingredientsState={ingredientsState}
        selectIngredient={selectIngredient}
        onChangeSelectIngredient={onChangeSelectIngredient}
      />

      {selectIngredientLoading
        ? <h3>Loading...</h3>
        : selectIngredientState
          ? params && <div className='mealsList'>
          {selectIngredientState.map((recipe) => (
            <MealCard
              meal={recipe}
              category={recipe?.strCategory}
              key={recipe.idMeal}/>
          ))
          }
        </div>
          : !params || !selectIngredient
            ? <h3>Enter ingredient</h3>
            : <h3>No results</h3>
      }

    </main>
  );
};

export default FilterIngredientPage;