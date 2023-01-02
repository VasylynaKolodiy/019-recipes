import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//_____________________________________________________________________________________
import './MealPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {
  GET_MEAL_REQUEST,
} from "../../redux/actions/recipes";
import {useParams} from "react-router-dom";
//_____________________________________________________________________________________

const MealPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const params = useParams().mealID;
  const dispatch = useDispatch();
  const mealState = useSelector((state) => state.recipes.meal);
  //const mealLoading = useSelector((state) => state.recipes.loading);

  console.log(mealState, 'mealState')

  useEffect(() => {
    dispatch({
      type: GET_MEAL_REQUEST,
      payload: params,
    })
  }, [params])


  return (
    <main className='meal container'>
      <BreadCrumbs name={mealState?.strMeal}/>

      <h1 className='meal__title'>{mealState?.strMeal}</h1>

      <div className='meal__info'>
        <div className='meal__image'>
          <img src={mealState?.strMealThumb} title={mealState?.strMealThumb} alt={mealState?.strMealThumb}/>
        </div>

        <div>
          <h3 className='meal__subtitle'>Ingredients:</h3>
          <div className='meal__list'>
            {arr.map((elem) => {
              return (
                mealState[`strIngredient${elem}`]
                  ? <div className='meal__ingredients' key={mealState?.idMeal}>
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
                  : ''
              )
            })}
          </div>
        </div>
      </div>


      <div className='meal__instructions'>
        <h3 className='meal__subtitle'>Instructions:</h3>
        <p>{mealState?.strInstructions}</p>
      </div>


      {/*<iframe width="420" height="315" src={mealState?.strYoutube}>*/}
      {/*</iframe>*/}


    </main>
  );
};

export default MealPage;