import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './HomePage.scss'
import {GET_LATEST_RECIPES_REQUEST, GET_RECIPES_CATEGORIES_REQUEST} from "../../redux/actions/recipes";
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";
import LatestRecipes from "../../components/LatestRecipes/LatestRecipes";
//_____________________________________________________________________________________

const HomePage = () => {

  const dispatch = useDispatch();
  const recipesCategoriesState = useSelector((state) => state.recipes.recipesCategories);
  const recipesCategoriesLoading = useSelector((state) => state.recipes.loading);
  const latestRecipesState = useSelector((state) => state.recipes.latestRecipes);
  //const latestRecipesLoading = useSelector((state) => state.recipes.loading);

  console.log(latestRecipesState, 'latestRecipesState')

  useEffect(() => {
    dispatch({
      type: GET_RECIPES_CATEGORIES_REQUEST,
    })

    dispatch({
      type: GET_LATEST_RECIPES_REQUEST,
    })
  }, [])

  return (
    <main className='homePage'>

      <Hero/>

      <div className='homePage__container container'>
        <h1 className='homePage__title' id='recipesCategories__title'> Recipes categories </h1>
        {recipesCategoriesLoading
          ? <h3> Loading... </h3>
          : <div className='homePage__list'>
            {recipesCategoriesState?.map((category) => (
              <RecipeCategory recipeCategory={category} key={category.idCategory}/>))}
          </div>
        }
      </div>

      <Subscribe/>

      <LatestRecipes meals={latestRecipesState}/>



    </main>
  );
};

export default HomePage;