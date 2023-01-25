import React from 'react';
import Skeleton from "@mui/material/Skeleton";
//_____________________________________________________________________________________
import './SkeletonsCategoriesAside.scss'
//_____________________________________________________________________________________

const SkeletonsCategoriesAside = () => {

  const asideList = Array.from({length: 14}, (_, index) => index + 1);

  return (
    <section className='skeletonsAside'>

      {asideList.map((item, i) =>
        <div className='skeletonsAside__item' key={i}>
          <Skeleton
            className='skeletonsAside__card'
            variant="rectangular"
            width='100%'
            height={28}
          />
        </div>
      )}

    </section>
  );
};

export default SkeletonsCategoriesAside;