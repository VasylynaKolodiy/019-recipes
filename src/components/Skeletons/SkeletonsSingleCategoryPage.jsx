import React from 'react';
import Skeleton from "@mui/material/Skeleton";
//_____________________________________________________________________________________
import './SkeletonsSingleCategoryPage.scss'
//_____________________________________________________________________________________

const SkeletonsSingleCategoryPage = () => {
  const skeletonsList = Array.from({length: 12}, (_, index) => index + 1);

  return (
    <section className='skeletons'>

      {skeletonsList.map((item, i) =>
        <div className='skeletons__card' key={i}>
          <Skeleton
            className='skeletons__image'
            variant="rectangular"
            width='100%'
            height={255}
          />
        </div>
      )}

    </section>
  );
};

export default SkeletonsSingleCategoryPage;