import React from 'react';
//_____________________________________________________________________________________
import './MealCard.scss'
//_____________________________________________________________________________________

const MealCard = ({meal = {}}) => {
  return (
    <div className='mealCard'>
      <div className='mealCard__image'>
        <img src={meal.strMealThumb} alt={meal.strMealThumb} title={meal.strMealThumb}/>
      </div>

      <h3 className='mealCard__name'>{meal.strMeal}</h3>

      <p className='mealCard__triangle'>
        <span className='mealCard__area'>{meal.strArea} {meal.strCategory}</span>
      </p>
    </div>
  );
};

export default MealCard;