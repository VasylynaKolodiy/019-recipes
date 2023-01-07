import React from 'react';
import {Link} from "react-router-dom";
//_____________________________________________________________________________________
import './MealCard.scss'
//_____________________________________________________________________________________

const MealCard = ({meal = {}}) => {


  return (
    <Link
      className='mealCard'
      to={(`/meal/${meal?.idMeal}`)}
    >
      <div className='mealCard__image'>
        <img src={meal.strMealThumb} alt={meal.strMeal} title={meal.strMeal}/>
      </div>

      <h3 className='mealCard__name'>{meal.strMeal}</h3>

      {meal.strArea && (
        <p className='mealCard__triangle'>
          <span className='mealCard__area'>{meal.strArea} {meal.strCategory}</span>
        </p>
      )}

    </Link>
  );
};

export default MealCard;