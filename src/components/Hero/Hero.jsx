import React, {useEffect} from 'react';
//_____________________________________________________________________________________
import './Hero.scss'
import FilterForm from "../FilterForm/FilterForm";
import Arrow from "../Arrow/Arrow";
import {useDispatch, useSelector} from "react-redux";
import {GET_ALL_AREAS_REQUEST} from "../../redux/actions/recipes";
//_____________________________________________________________________________________

const Hero = () => {

  const dispatch = useDispatch();
  const areasState = useSelector((state) => state.recipes.areas);
  const areas = areasState?.map((elem) => elem.strArea)

  useEffect(() => {
    dispatch({
      type: GET_ALL_AREAS_REQUEST,
    })
  }, [])

  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='hero__title'>It is even better than an expensive cookery book</h1>
        <p className='hero__text'>Learn how to make your favorite restaurant’s dishes</p>

        <FilterForm areas={areas}/>

        <a href='#recipesCategories__title'>
          <Arrow/>
        </a>
      </div>
    </section>
  );
};

export default Hero;