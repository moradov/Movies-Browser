import React, { useContext } from 'react';
import gloabalContext from '../context/global/globalContext';
// in the Global state we set err values should contain the error id each time some thing went wrong in the app
const ErrorHund = () => {
  //pull the context values
  const { err, getMovies, getMovieDetails, getRandomMovie } = useContext(
    gloabalContext
  );
  // err with id == 6 should reload automatically without clicking the btn reload
  if (err === 6) {
    getRandomMovie();
  }
  // onclick reload(Try again) btn should fire a method by the err id
  const reLoad = () => {
    switch (err) {
      case 1:
        getMovies();
        break;
      case 2:
        getMovieDetails();
        break;
      case 3:
        getMovies('top_rated');
        break;
      case 4:
        getMovies('upcoming');
        break;
      case 5:
        getRandomMovie();
        break;
      default:
        return null;
    }
  };
  return (
    <div className='err-hund'>
      <h3> Something Went Wrong </h3>
      <button onClick={reLoad}>Try again</button>
    </div>
  );
};

export default ErrorHund;
