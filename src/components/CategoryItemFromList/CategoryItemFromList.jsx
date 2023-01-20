import React from 'react';
import {Link, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './CategoryItemFromList.scss'
//_____________________________________________________________________________________

const CategoryItemFromList = ({category, setPageNumber}) => {
  const {categoryName} = useParams();
  return (
    <>
      <div className='category__item' onClick={() => setPageNumber(1)}>
        <Link
          className='category__link'
          to={`/${category?.strCategory}`}
        >

        <p className={`category__info ${category?.strCategory === categoryName ? 'active' : ''}`}>
          {category?.strCategory}
        </p>
        </Link>
      </div>
    </>
  );
};

export default CategoryItemFromList;