import React from 'react';
//_____________________________________________________________________________________
import './RecipeItem.scss'
//_____________________________________________________________________________________

const RecipeItem = ({recipe}) => {
  return (
    <div className='recipeItem'>
      <div className='recipeItem__image'>
        <img src={recipe.strMealThumb} alt='Recipe item' title='Recipe item' />
      </div>

      <h2>{recipe.strMeal}</h2>

    </div>
  );
};

export default RecipeItem;