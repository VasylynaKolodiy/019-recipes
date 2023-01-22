import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// *Import css files for slider*
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//_____________________________________________________________________________________
import './HomePage.scss'
import {
  GET_LATEST_RECIPES_REQUEST,
  GET_RECIPES_AREAS_REQUEST,
  GET_RECIPES_CATEGORIES_REQUEST
} from "../../redux/actions/recipes";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";
import LatestRecipes from "../../components/LatestRecipes/LatestRecipes";
//_____________________________________________________________________________________

const HomePage = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const recipesCategoriesState = useSelector((state) => state.recipes.recipesCategories);
  const recipesCategoriesLoading = useSelector((state) => state.recipes.loading);

  const recipesAreasState = useSelector((state) => state.recipes.recipesAreas);
  const recipesAreasLoading = useSelector((state) => state.recipes.loading);

  const latestRecipesState = useSelector((state) => state.recipes.latestRecipes);

  useEffect(() => {
    dispatch({
      type: GET_RECIPES_CATEGORIES_REQUEST,
    })

    dispatch({
      type: GET_RECIPES_AREAS_REQUEST,
    })

    dispatch({
      type: GET_LATEST_RECIPES_REQUEST,
    })
  }, [])

  return (
    <main className='homePage'>

      <Hero/>

      <div className='homePage__container container'>
      <Slider {...settings}>

        <div>
          <h1 className='homePage__title' id='recipesCategories__title'> Recipes categories </h1>
          {recipesCategoriesLoading
            ? <h3> Loading... </h3>
            : <div className='homePage__list'>
              {recipesCategoriesState?.map((category) => (
                <CategoryCard typeCategory='category' recipes={category} key={category.idCategory}/>))}
            </div>
          }
        </div>


        <div>
          <h1 className='homePage__title' id='recipesCategories__title'> Recipes areas </h1>
          {recipesAreasLoading
            ? <h3> Loading... </h3>
            : <div className='homePage__list'>
              {recipesAreasState?.map((area) => (
                <CategoryCard typeCategory='area' recipes={area} key={area.strArea}/>))}
            </div>
          }
        </div>


      </Slider>
      </div>

      <Subscribe/>

      <LatestRecipes meals={latestRecipesState}/>

    </main>
  );
};

export default HomePage;