import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './SingleCategoryPage.scss'
import {FILTER_RECIPES_BY_CATEGORIES_REQUEST} from "../../redux/actions/recipes";
import MealCard from "../../components/MealCard/MealCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
//_____________________________________________________________________________________

const SingleCategoryPage = () => {
  const params = useParams().categoryName;
  const dispatch = useDispatch();
  const recipesByCategoryState = useSelector((state) => state.recipes.recipes);
  const recipesByCategoryLoading = useSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch({
      type: FILTER_RECIPES_BY_CATEGORIES_REQUEST,
      payload: params,
    })
  }, [params])

  return (
    <main className='singleCategory container'>

      <BreadCrumbs name={params}/>

      <h1 className='singleCategory__title'>Recipes by category {params}</h1>

      {recipesByCategoryLoading
        ? <h3>Loading...</h3>
        : <div className='mealsList'>
          {recipesByCategoryState.map((recipe) => (
            <MealCard meal={recipe} key={recipe.idMeal}/>
          ))
          }
        </div>
      }


    </main>
  );
};

export default SingleCategoryPage;