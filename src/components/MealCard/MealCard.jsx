import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './MealCard.scss'
//_____________________________________________________________________________________

const MealCard = ({meal = {}}) => {

  const navigate = useNavigate();
  const params = useParams().categoryName;

  return (
    <div
      className='mealCard'
      onClick={() => navigate(`/${meal?.strCategory ? meal?.strCategory : params}/${meal?.idMeal}`)}
    >
      <div className='mealCard__image'>
        <img src={meal.strMealThumb} alt={meal.strMealThumb} title={meal.strMealThumb}/>
      </div>

      <h3 className='mealCard__name'>{meal.strMeal}</h3>

      {meal.strArea && (
        <p className='mealCard__triangle'>
          <span className='mealCard__area'>{meal.strArea} {meal.strCategory}</span>
        </p>
      )}

    </div>
  );
};

export default MealCard;