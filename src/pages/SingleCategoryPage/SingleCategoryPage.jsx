import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './SingleCategoryPage.scss'
import {FILTER_RECIPES_BY_CATEGORIES_REQUEST} from "../../redux/actions/recipes";
import MealCard from "../../components/MealCard/MealCard";
//_____________________________________________________________________________________

const SingleCategoryPage = () => {
  const params = useParams().categoryName;
  const dispatch = useDispatch();
  const recipesByCategoryState = useSelector((state) => state.recipes.recipes);

  useEffect(() => {
    dispatch({
      type: FILTER_RECIPES_BY_CATEGORIES_REQUEST,
      payload: params,
    })
  }, [params])

  console.log(recipesByCategoryState, 'recipesByCategoryState')

  return (
    <main className='singleCategory container'>

      {recipesByCategoryState.map((recipe) => (
        // <RecipeItem recipe={recipe} key={recipe.idMeal} />
        <MealCard meal={recipe} key={recipe.idMeal}/>
      ))
      }


    </main>
  );
};

export default SingleCategoryPage;