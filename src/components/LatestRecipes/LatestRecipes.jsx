import React from 'react';
//_____________________________________________________________________________________
import './LatestRecipes.scss'
import MealCard from "../MealCard/MealCard";
//_____________________________________________________________________________________

const LatestRecipes = ({meals=[]}) => {

  return (
    <section className='latestRecipes'>

      <div className='latestRecipes__info'>
        <h2 className='latestRecipes__title' id='latestRecipes__title'> Latest Meals </h2>
        <p className='latestRecipes__text'> Excepteur sint occaecat cupidatat non qui proident,
          sunt culpa qui officia deserunmollit anim id est laborum.</p>
      </div>

      {meals.map((meal) => <MealCard meal={meal} key={meal.idMeal} />)}


    </section>
  );
};

export default LatestRecipes;