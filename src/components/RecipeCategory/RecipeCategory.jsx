import React from 'react';
//_____________________________________________________________________________________
import './RecipeCategory.scss'
//_____________________________________________________________________________________

const RecipeCategory = ({recipeCategory}) => {
  return (
    <div className='recipeCategory__wrapper'>
      <div className='recipeCategory'>
        <div className='recipeCategory__image'>
          <img
            src={recipeCategory.strCategoryThumb}
            alt='Recipe category'
            title='Recipe category'
          />
        </div>

        <div className='recipeCategory__info'>
          <h2 className='recipeCategory__title'>
            {recipeCategory.idCategory}. {recipeCategory.strCategory}
          </h2>
          <p className='recipeCategory__description'>
            {recipeCategory.strCategoryDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCategory;