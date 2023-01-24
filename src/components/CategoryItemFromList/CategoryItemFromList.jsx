import React from 'react';
import {Link, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './CategoryItemFromList.scss'
//_____________________________________________________________________________________

const CategoryItemFromList = ({category, setPageNumber}) => {
  const {categoryType, categoryName} = useParams();

  return (
    <div className='category__item' onClick={() => setPageNumber(1)}>
      <Link
        className='category__link'
        to={`/${categoryType}/${category?.strCategory || category?.strArea?.replaceAll('Unknown', 'Others')}`}>
        <p
          className={`category__info ${(category?.strCategory === categoryName || category?.strArea === categoryName) ? 'active' : ''}`}>
          {category?.strCategory || category?.strArea?.replaceAll('Unknown', 'Others')}
        </p>
      </Link>
    </div>
  );
};

export default CategoryItemFromList;