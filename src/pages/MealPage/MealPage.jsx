import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
//_____________________________________________________________________________________
import './MealPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {
  GET_MEAL_REQUEST,
} from "../../redux/actions/recipes";
//_____________________________________________________________________________________

const MealPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const params = useParams().mealID;
  const dispatch = useDispatch();
  const mealState = useSelector((state) => state.recipes.meal);
  //const mealLoading = useSelector((state) => state.recipes.loading);

  //let videoID = (String(mealState?.strYoutube))?.replace('https://www.youtube.com/watch?v=', '')

  useEffect(() => {
    dispatch({
      type: GET_MEAL_REQUEST,
      payload: params,
    })
  }, [params])

  // const opts = {
  //   height: '500',
  //   width: '1000',
  // };
  const navigate = useNavigate();

  return (
    <main className='meal container'>
      <BreadCrumbs category={mealState?.strCategory} name={mealState?.strMeal}/>

      <h1 className='meal__title'>{mealState?.strMeal}</h1>

      <div className='meal__info'>
        <div className='meal__image'>
          <img src={mealState?.strMealThumb} title={mealState?.strMealThumb} alt={mealState?.strMealThumb}/>

          <div className='meal__image-triangle'>
          </div>
          <div className='meal__image-info'>
              <p>Area: <Link className='hoverLink' to={`/${mealState?.strCategory}`}>{mealState?.strArea}</Link></p>
              <p>Category: <Link className='hoverLink' to={`/${mealState?.strCategory}`}>{mealState?.strCategory}</Link></p>
          </div>

        </div>

        <div>
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

      {/*<YouTube*/}
      {/*  videoId={videoID}*/}
      {/*  opts={opts}*/}
      {/*  onReady={(e) => e.target.pauseVideo()}*/}
      {/*/>*/}

    </main>
  );
};

export default MealPage;