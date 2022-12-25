import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './RecipesCategoriesPage.scss'
import {GET_RECIPES_CATEGORIES_REQUEST} from "../../redux/actions/recipes";
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import Hero from "../../components/Hero/Hero";
//_____________________________________________________________________________________

const RecipesCategoriesPage = () => {

  const dispatch = useDispatch();
  const recipesCategoriesState = useSelector((state) => state.recipes.recipesCategories);
  const recipesCategoriesLoading = useSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch({
      type: GET_RECIPES_CATEGORIES_REQUEST,
    })
  }, [])

  return (
    <main className='recipesCategories'>

      <Hero/>

      <h1 className='recipesCategories__title' id='recipesCategories__title'> Recipes categories </h1>
      {recipesCategoriesLoading
        ? <h3> Loading... </h3>
        : <div className='recipesCategories__list'>
          {recipesCategoriesState?.map((category) => (
            <RecipeCategory recipeCategory={category} key={category.idCategory}/>))}
        </div>

      }

    </main>
  );
};

export default RecipesCategoriesPage;