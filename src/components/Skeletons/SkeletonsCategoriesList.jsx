import React from 'react';
import Skeleton from "@mui/material/Skeleton";
//_____________________________________________________________________________________
import './SkeletonsCategoriesList.scss'
//_____________________________________________________________________________________

const SkeletonsCategoriesList = () => {
  const cardsList = Array.from({length: 12}, (_, index) => index + 1);

  return (
    <section className='skeletonsList'>

        {cardsList.map((item, i) =>
          <div className='skeletonsList__item' key={i}>
            <Skeleton
              className='skeletonsList__card'
              variant="rectangular"
              width='100%'
              height={255}
            />
          </div>
        )}

    </section>
  );
};

export default SkeletonsCategoriesList;