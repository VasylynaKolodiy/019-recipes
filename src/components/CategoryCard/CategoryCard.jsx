import React from 'react';
import {Link} from "react-router-dom";
//_____________________________________________________________________________________
import './CategoryCard.scss'
import {nationalsFoods} from "../../constants";
//_____________________________________________________________________________________

const CategoryCard = ({typeCategory, recipes}) => {

  return (
    <Link
      className='categoryCard'
      to={`/${typeCategory}/${recipes?.strCategory ? recipes?.strCategory : recipes?.strArea.replaceAll('Unknown', 'Others')}`}
    >

      {typeCategory === 'categories'
        ? <div className='categoryCard__image'>
          <img
            src={recipes?.strCategoryThumb}
            alt={recipes?.strCategory}
            title={recipes?.strCategory}
          />
        </div>

        : <div className='categoryCard__nationalsFoods'>
          <img
            src={nationalsFoods[recipes.strArea]}
            alt={recipes?.strArea}
            title={recipes?.strArea}
          />
        </div>
      }

      <div className='categoryCard__info'>
        <h2 className='categoryCard__title'>
          {recipes?.strCategory
            ? recipes?.strCategory
            : recipes?.strArea?.replaceAll('Unknown', 'Others')
          }
        </h2>
      </div>


    </Link>
  );
};

export default CategoryCard;