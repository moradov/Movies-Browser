import React, { useEffect, useContext, Fragment } from 'react';

import globalContext from '../../context/global/globalContext';

import RandomMovie from '../RadomMovie';
import ErrorHund from '../ErrorHund';

const RandomPage = () => {
  //pull context values
  const {
    getRandomMovie,
    err,
    randomMovie,
    loading,
    setCurrentPagePath
  } = useContext(globalContext);
  // get getRandomMovie func every time the page loaded
  useEffect(() => {
    setCurrentPagePath('Random');
    getRandomMovie();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='content-body' style={{ textAlign: 'center' }}>
      {err ? (
        <ErrorHund />
      ) : (
        <Fragment>
          <RandomMovie showSpinner={loading} movieData={randomMovie} />
          {!loading ? (
            <button className='random-btn' onClick={() => getRandomMovie()}>
              generate
            </button>
          ) : null}
        </Fragment>
      )}
    </div>
  );
};

export default RandomPage;
