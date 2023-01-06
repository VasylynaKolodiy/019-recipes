import React, {useState} from 'react';
//_____________________________________________________________________________________
import './Hero.scss'
import SearchForm from "../SearchForm/SearchForm";
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

        <SearchForm
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