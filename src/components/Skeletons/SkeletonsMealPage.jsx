import React from 'react';
//_____________________________________________________________________________________
import './SkeletonsMealPage.scss'
import Skeleton from "@mui/material/Skeleton";
//_____________________________________________________________________________________

const SkeletonsMealPage = () => {

  const ingredientsList = Array.from({length: 5}, (_, index) => index + 1);

  return (
    <section className='skeletonsMealPage'>

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width='50%'
        height={43}
      />

      <div className='skeletonsMealPage__info'>

        <div className='skeletonsMealPage__wrapperImage'>
          <Skeleton
            className='skeletonsMealPage__image'
            variant="rectangular"
            width='100%'
            height={650}
          />
        </div>

        <div className='skeletonsMealPage__wrapperInfo'>
          <Skeleton
            className='skeletonsMealPage__subtitle'
            variant="rectangular"
            width='60%'
            height={24}
          />

          {ingredientsList.map(() =>
            (
              <div className='skeletonsMealPage__rowWrapper'>
                <div className='skeletonsMealPage__row'>
                  <Skeleton
                    className='skeletonsMealPage__rowImage'
                    variant="rectangular"
                    width={100}
                    height={100}
                  />
                  <Skeleton
                    className='skeletonsMealPage__rowText'
                    variant="rectangular"
                    width={150}
                    height={20}
                  />

                  <Skeleton
                    className='skeletonsMealPage__rowImage'
                    variant="rectangular"
                    width={100}
                    height={100}
                  />
                  <Skeleton
                    className='skeletonsMealPage__rowText'
                    variant="rectangular"
                    width={150}
                    height={20}
                  />
                </div>

                <Skeleton
                  className='skeletonsMealPage__rowLine'
                  variant="rectangular"
                  width='100%'
                  height={1}
                />

              </div>
            )
          )}
        </div>
      </div>

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width='50%'
        height={30}
      />

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width='100%'
        height={100}
      />

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width='100%'
        height={100}
      />

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width='100%'
        height={100}
      />

      <Skeleton
        className='skeletonsMealPage__title'
        variant="rectangular"
        width={1000}
        height={500}
      />

    </section>
  );
};

export default SkeletonsMealPage;