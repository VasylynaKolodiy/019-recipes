import React, {useEffect, useState} from 'react';
//_____________________________________________________________________________________
import './AlphabetPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_ALPHABET_REQUEST} from "../../redux/actions/recipes";
import MealCard from "../../components/MealCard/MealCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
//_____________________________________________________________________________________

const AlphabetPage = () => {

  const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  const [letter, setLetter] = useState('A')

  const dispatch = useDispatch();
  const alphabetState = useSelector((state) => state.recipes.recipes);
  const alphabetLoading = useSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch({
      type: GET_ALPHABET_REQUEST,
      payload: letter,
    })
  }, [letter])

  console.log(alphabetState, 'alphabetState')
  return (
    <main className='alphabet container'>

      <BreadCrumbs/>

      <div className='alphabet__list'>
        {alphabet.map((symb) => <span
          className={`alphabet__letter ${letter.toUpperCase() === symb.toUpperCase() ? 'active' : ''}`} key={symb}
          onClick={() => setLetter(symb)}>{symb.toUpperCase()}</span>)}
      </div>

      {alphabetLoading
        ? <h3>Loading...</h3>
        : alphabetState
          ? <div className='alphabet__mealsList'>
            {alphabetState.map((recipe) => (
              <MealCard
                meal={recipe}
                category={recipe?.strCategory}
                key={recipe.idMeal}
              />
            ))
            }
          </div>
          : <h3>No results</h3>

      }

    </main>
  );
};

export default AlphabetPage;