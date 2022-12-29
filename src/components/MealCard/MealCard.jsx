import React from 'react';
//_____________________________________________________________________________________
import './MealCard.scss'
//_____________________________________________________________________________________

const MealCard = ({meal={}}) => {
  return (
    <div className='mealCard'>
      <div className='mealCard__image'>
        <img src={meal.strMealThumb} alt={meal.strMealThumb} title={meal.strMealThumb} />
      </div>

      <div className='mealCard__info'>
        <h3 className='mealCard__name'>{meal.strMeal}</h3>
        <p className='mealCard__area'>
          {meal.strArea}
        </p>
        <p className='mealCard__category'>
          {meal.strCategory}
        </p>
      </div>

    </div>
  );
};

export default MealCard;