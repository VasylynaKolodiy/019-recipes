import React from 'react';
// *Import css files for slider*
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//_____________________________________________________________________________________
import './LatestRecipes.scss'
import MealCard from "../MealCard/MealCard";
//_____________________________________________________________________________________

const LatestRecipes = ({meals = []}) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className='latestRecipes container'>

      <div className='latestRecipes__info'>
        <h2 className='latestRecipes__title' id='latestRecipes__title'> Latest Meals </h2>
        <p className='latestRecipes__text'> Excepteur sint occaecat cupidatat non qui proident,
          sunt culpa qui officia deserunmollit anim id est laborum.</p>
      </div>

      <div className='mealsList'>
        <Slider {...settings}>
          {meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal}/>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default LatestRecipes;