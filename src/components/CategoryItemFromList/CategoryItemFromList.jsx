import React from 'react';
import {Link, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './CategoryItemFromList.scss'
//_____________________________________________________________________________________

const CategoryItemFromList = ({category, setPageNumber}) => {
  const {categoryName} = useParams();
  const {areaName} = useParams();
  return (
    <>
      <div className='category__item' onClick={() => setPageNumber(1)}>
        <Link
          className='category__link'
          to={`${category?.strCategory ? `/category/${category?.strCategory}` : `/area/${category?.strArea}`}`}
        >
          {categoryName
            ? <p
              className={`category__info ${category?.strCategory === categoryName ? 'active' : ''}`}>
              {category?.strCategory}
            </p>

            : <p
              className={`category__info ${(category?.strArea === areaName) ? 'active' : ''}`}>
              {category?.strArea}
            </p>
          }

        </Link>
      </div>
    </>
  );
};

export default CategoryItemFromList;