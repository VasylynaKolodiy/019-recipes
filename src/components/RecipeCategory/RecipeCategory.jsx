import React from 'react';
import {Link} from "react-router-dom";
//_____________________________________________________________________________________
import './RecipeCategory.scss'
//_____________________________________________________________________________________

const RecipeCategory = ({recipeCategory}) => {

  return (
    <Link
      className='recipeCategory'
      to={`/${recipeCategory?.strCategory ? recipeCategory?.strCategory : recipeCategory?.strArea}`}
    >
      <div className='recipeCategory__image'>
        <img
          src={recipeCategory?.strCategoryThumb}
          alt={recipeCategory?.strCategory}
          title={recipeCategory?.strCategory}
        />
      </div>

      <div className='recipeCategory__info'>
        <h2 className='recipeCategory__title'>

          {recipeCategory?.idCategory
            ? recipeCategory?.strCategory
            : recipeCategory?.strArea
          }

        </h2>

        {/*<p className='recipeCategory__description'>*/}
        {/*  {recipeCategory?.strCategoryDescription}*/}
        {/*</p>*/}
      </div>
    </Link>
  );
};

export default RecipeCategory;