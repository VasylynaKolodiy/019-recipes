import React, {useState} from 'react';
//_____________________________________________________________________________________
import './Hero.scss'
import FilterForm from "../FilterForm/FilterForm";
import Arrow from "../Arrow/Arrow";
//_____________________________________________________________________________________

const Hero = () => {

  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchValue = (e) => {
    setSearchValue(e)
  }

  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='hero__title'>It is even better than an expensive cookery book</h1>
        <p className='hero__text'>Learn how to make your favorite restaurant’s dishes</p>

        <FilterForm
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
        />

        <a href='#recipesCategories__title'>
          <Arrow/>
        </a>
      </div>
    </section>
  );
};

export default Hero;