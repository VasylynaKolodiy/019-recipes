import React from 'react';
import {useNavigate} from "react-router-dom";
//_____________________________________________________________________________________
import './RecipeCategory.scss'
//_____________________________________________________________________________________

const RecipeCategory = ({recipeCategory}) => {
  const navigate = useNavigate()

  return (
    <div
      className='recipeCategory'
      onClick={() => navigate(`/categories/${recipeCategory.strCategory}`)}
    >
      <div className='recipeCategory__image'>
        <img
          src={recipeCategory.strCategoryThumb}
          alt={recipeCategory.strCategory}
          title={recipeCategory.strCategory}
        />
      </div>

      <div className='recipeCategory__info'>
        <h2 className='recipeCategory__title'>
          {recipeCategory.idCategory}. {recipeCategory.strCategory}
        </h2>

        {/*<p className='recipeCategory__description'>*/}
        {/*  {recipeCategory.strCategoryDescription}*/}
        {/*</p>*/}
      </div>
    </div>
  );
};

export default RecipeCategory;