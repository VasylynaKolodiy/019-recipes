import React from 'react';
import {Link, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './CategoryItemFromList.scss'
//_____________________________________________________________________________________

const CategoryItemFromList = ({category, setPageNumber}) => {
  const {categoryType, categoryName} = useParams();

  return (
    <>
      <div className='category__item' onClick={() => setPageNumber(1)}>
        <Link
          className='category__link'
          to={`${categoryType === 'category' ? `/category/${category?.strCategory}` : `/area/${category?.strArea}`}`}
        >
          {categoryType === 'category'
            ? <p
              className={`category__info ${category?.strCategory === categoryName ? 'active' : ''}`}>
              {category?.strCategory}
            </p>

            : <p
              className={`category__info ${(category?.strArea === categoryName) ? 'active' : ''}`}>
              {category?.strArea}
            </p>
          }

        </Link>
      </div>
    </>
  );
};

export default CategoryItemFromList;