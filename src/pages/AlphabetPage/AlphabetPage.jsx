import React, {useEffect, useState} from 'react';
import Pagination from "@mui/material/Pagination";
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

  const LIMIT = 12;
  const [pageNumber, setPageNumber] = useState(1);
  const TOTAL_COUNT = alphabetState?.length;
  let countOfPages = TOTAL_COUNT && Math.ceil(TOTAL_COUNT / LIMIT);

  useEffect(() => {
    dispatch({
      type: GET_ALPHABET_REQUEST,
      payload: letter,
    })
    window.scrollTo(0, 0)
  }, [letter, pageNumber])

  const onClickLetter = (symb) => {
    setLetter(symb);
    setPageNumber(1)
  }

  return (
    <main className='alphabet container'>

      <BreadCrumbs/>

      <div className='alphabet__list'>
        {alphabet.map((symb) => <span
          className={`alphabet__letter ${letter.toUpperCase() === symb.toUpperCase() ? 'active' : ''}`} key={symb}
          onClick={() => onClickLetter(symb)}>{symb.toUpperCase()}</span>)}
      </div>

      {alphabetLoading
        ? <h3>Loading...</h3>
        : alphabetState
          ? <div className='alphabet__mealsList'>
            {alphabetState?.slice(pageNumber * LIMIT - LIMIT, pageNumber * LIMIT).map((recipe) => (
              <MealCard
                meal={recipe}
                category={recipe?.strCategory}
                key={recipe.idMeal}
              />
            ))
            }
          </div>
          : <h3>No dishes were found, the name of which would start with a letter {letter.toUpperCase()}</h3>
      }

      {countOfPages > 1 &&
      (<Pagination
          className='pagination'
          count={countOfPages}
          size="medium"
          page={pageNumber}
          onChange={(event, value) => setPageNumber(value)}
        />
      )}

    </main>
  );
};

export default AlphabetPage;