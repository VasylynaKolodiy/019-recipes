import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@mui/material/Pagination";
//_____________________________________________________________________________________
import './SingleCategoryPage.scss'
import MealCard from "../../components/MealCard/MealCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import CategoryItemFromList from "../../components/CategoryItemFromList/CategoryItemFromList";
import SkeletonsCards from "../../components/Skeletons/SkeletonsCards";
import SkeletonsCategoriesAside from "../../components/Skeletons/SkeletonsCategoriesAside";
//_____________________________________________________________________________________

const SingleCategoryPage = () => {
  let {categoryType, categoryName} = useParams();
  categoryName = (categoryName === 'Others') ? 'Unknown' : categoryName

  const dispatch = useDispatch();
  const recipesByCategoryState = useSelector((state) => state.recipes.recipes);
  const recipesByCategoryLoading = useSelector((state) => state.recipes.loading);
  const recipesByCategoryNameLoading = useSelector((state) => state.recipes.loadingCategoryName);

  const recipesCatArea = 'recipes' + categoryType[0].toUpperCase() + categoryType.substring(1)
  const recipesCategoriesAreasState = useSelector((state) => state.recipes[recipesCatArea]);

  const LIMIT_CATEGORY = 12;
  const [pageNumber, setPageNumber] = useState(1);
  const TOTAL_COUNT = recipesByCategoryState?.length;
  let countOfPages = TOTAL_COUNT && Math.ceil(TOTAL_COUNT / LIMIT_CATEGORY);

  const FILTER_TYPE = 'FILTER_RECIPES_BY_' + categoryType.toUpperCase() + "_REQUEST"
  const GET_TYPE = 'GET_RECIPES_' + categoryType.toUpperCase() + "_REQUEST"

  useEffect(() => {
    dispatch({
      type: FILTER_TYPE,
      payload: categoryName,
    })
  }, [categoryName])

  useEffect(() => {
    dispatch({
      type: GET_TYPE,
    })
  }, [])

  return (
    <main className='singleCategory container'>

      <div className='singleCategory__mainPart'>
        <BreadCrumbs name={categoryName}/>

        {recipesByCategoryLoading
          ? <SkeletonsCards countOfCards={LIMIT_CATEGORY}/>
          : <div className='mealsList'>
            {recipesByCategoryState?.slice(pageNumber * LIMIT_CATEGORY - LIMIT_CATEGORY, pageNumber * LIMIT_CATEGORY).map((recipe) => (
              <MealCard
                meal={recipe}
                category={categoryName}
                key={recipe.idMeal}/>
            ))}
          </div>}

        {countOfPages > 1 &&
        (<Pagination
            className='pagination'
            count={countOfPages}
            size="medium"
            page={pageNumber}
            onChange={(event, value) => setPageNumber(value)}
          />
        )}
      </div>

      <aside className='singleCategory__aside'>
        <h3 className='singleCategory__asideTitle'>Other {categoryType}:</h3>
        {recipesByCategoryNameLoading
          ? <SkeletonsCategoriesAside/>
          : recipesCategoriesAreasState?.map((category, i) => (
            <CategoryItemFromList
              category={category}
              setPageNumber={setPageNumber}
              key={i}/>
          ))
        }
      </aside>
    </main>
  );
};

export default SingleCategoryPage;