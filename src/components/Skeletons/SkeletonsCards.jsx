import React from 'react';
import Skeleton from "@mui/material/Skeleton";
//_____________________________________________________________________________________
import './SkeletonsCards.scss'
//_____________________________________________________________________________________

const SkeletonsCards = ({countOfCards}) => {
  const cardsList = Array.from({length: countOfCards}, (_, index) => index + 1);

  return (
    <section className='skeletonsCards'>

        {cardsList.map((item, i) =>
          <div className='skeletonsCards__item' key={i}>
            <Skeleton
              className='skeletonsCards__card'
              variant="rectangular"
              width='100%'
              height={255}
            />
          </div>
        )}

    </section>
  );
};

export default SkeletonsCards;