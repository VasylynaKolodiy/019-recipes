import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import YouTube from 'react-youtube';
//_____________________________________________________________________________________
import './MealPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {GET_MEAL_REQUEST,} from "../../redux/actions/recipes";
import SkeletonsMealPage from "../../components/Skeletons/SkeletonsMealPage";
//_____________________________________________________________________________________

const MealPage = () => {
  const arr = Array.from({length: 20}, (_, index) => index);
  const navigate = useNavigate();
  const {mealID} = useParams();
  const dispatch = useDispatch();
  const mealState = useSelector((state) => state.recipes.meal);
  const mealLoading = useSelector((state) => state.recipes.loading);
  let videoID = (String(mealState?.strYoutube))?.replace('https://www.youtube.com/watch?v=', '')

  const opts = {
    height: '500',
    maxWidth: '1000',
  };

  useEffect(() => {
    dispatch({
      type: GET_MEAL_REQUEST,
      payload: mealID,
    })
  }, [mealID])

  return (
    <main className='meal container'>
      <BreadCrumbs category={mealState?.strCategory} name={mealState?.strMeal}/>

      {mealLoading
        ? <SkeletonsMealPage/>
        : <>
          <h1 className='meal__title'>{mealState?.strMeal}</h1>

          <div className='meal__info'>
            <div className='meal__image'>
              <img src={mealState?.strMealThumb} title={mealState?.strMealThumb} alt={mealState?.strMealThumb}/>

              <div className='meal__image-triangle'/>

              <div className='meal__image-categories'>
                <div>Area: <Link className='hoverLink'
                                 to={`/areas/${mealState?.strArea?.replace('Unknown', 'Others')}`}>{mealState?.strArea?.replace('Unknown', 'Others')}</Link>
                </div>
                <div>Category: <Link className='hoverLink'
                                     to={`/categories/${mealState?.strCategory}`}>{mealState?.strCategory}</Link></div>
              </div>
            </div>

            <div className='meal__wrapper'>
              <h3 className='meal__subtitle'>Ingredients:</h3>
              <div className='meal__list'>
                {arr.map((elem) => {
                  return (
                    mealState[`strIngredient${elem}`]
                    && <div
                      className='meal__ingredients'
                      onClick={() => navigate(`/ingredient/${mealState[`strIngredient${elem}`].toLowerCase()}`)}
                      key={elem}
                    >
                      <div className='meal__ingredientImage'>
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${mealState[`strIngredient${elem}`]}.png`}
                          title={mealState[`strIngredient${elem}`]}
                          alt={mealState[`strIngredient${elem}`]}
                        />
                      </div>

                      <p className='meal__measure'>
                        {mealState[`strIngredient${elem}`]} - {mealState[`strMeasure${elem}`]}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='meal__instructions'>
            <h3 className='meal__subtitle'>Instructions:</h3>
            <p>{mealState?.strInstructions}</p>
          </div>

          <YouTube
            videoId={videoID}
            opts={opts}
            onReady={(e) => e.target.pauseVideo()}
          />
        </>
      }

    </main>
  );
};

export default MealPage;