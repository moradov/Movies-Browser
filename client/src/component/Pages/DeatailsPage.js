import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import GloabalContext from '../../context/global/globalContext';

import DetailsItem from '../DetailsItem';
import ErrorHund from '../ErrorHund';
import Spinner from '../Spinner';
const DeatailsPage = ({ match }) => {
  //pull the states and the nedeed methods from the context
  const {
    getMovieDetails,
    movieDetails,
    loading,
    movieCast,
    err,
    clearMovieDetails
  } = useContext(GloabalContext);
  // each time the page is loaded getMovieDetails to get the data by params id
  useEffect(() => {
    clearMovieDetails();
    getMovieDetails(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '699px',
        zIndex: '99',
        position: 'relative',
        backgroundColor: 'red',
        background: '-webkit-linear-gradient(left, #3146bb -30%, #ff5050 104%)'
      }}
    >
      {err ? <ErrorHund /> : null}

      {loading || !movieCast ? (
        <div style={{ paddingTop: '200px' }}>
          <Spinner />
        </div>
      ) : (
        <DetailsItem
          showSpinner={loading}
          singleMovieData={movieDetails}
          movieCast={movieCast}
        />
      )}
    </div>
  );
};
DeatailsPage.propTypes = {
  match: PropTypes.object.isRequired
};
export default DeatailsPage;
