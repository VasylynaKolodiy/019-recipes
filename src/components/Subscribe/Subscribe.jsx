import React from 'react';
//_____________________________________________________________________________________
import './Subscribe.scss'
import Button from "@mui/material/Button";
import Arrow from "../Arrow/Arrow";
//_____________________________________________________________________________________

const Subscribe = () => {
  return (
    <section className='subscribe'>
      {/*<a href='#recipesCategories__title'>*/}
      {/*  <Arrow />*/}
      {/*</a>*/}
      <div className='subscribe__container container'>
        <h2 className='subscribe__title'>Subscribe to our Newsletter</h2>
        <p className='subscribe__text'>Fusce id velit placerat,
          efficitur libero placerat, sodales ante.
          Curabitur sed erosat orci congue vestibulum.</p>
        <Button>Subscribe</Button>
      </div>
      <a href='#latestRecipes__title'>
        <Arrow/>
      </a>
    </section>
  );
};

export default Subscribe;