import React from "react";
import TMDB_CONTRIES_DATA from "../data/TMDB_CONTRIES_DATA";
const DetailsItem = ({
  singleMovieData: {
    poster_path,
    title,
    vote_average,
    original_language,
    runtime,
    genres,
    production_companies,
    overview,
    release_date,
  },
  movieCast,
}) => {
  // the movie langues or country comme from the API like this => it : italy  , so we had to get the full contry name from TMDB_COUNTRIES_DATA by filter it
  const getCountryName = (id) => {
    if (id) {
      const filterCountry = TMDB_CONTRIES_DATA.filter(
        (item) => item.iso_3166_1 === id.toUpperCase()
      );
      return filterCountry[0].english_name + " /";
    }
  };
  return (
    <div
      className='details'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w400${poster_path})`,
      }}
    >
      <div className='empty'></div>
      <div className='content-flex'>
        <div className='poster-img'>
          <img
            alt='poster img'
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          />
        </div>
        <div className='content'>
          <h2 className='item-title'> {title} </h2>
          <div className='info'>
            <span>
              {production_companies
                ? `${production_companies[0].name} / `
                : null}
            </span>
            <span> {getCountryName(original_language)}</span>
            <span>
              {release_date ? `${release_date.slice(0, 4)} / ` : null}
            </span>
            <span> {runtime + " min"} </span>
          </div>
          <div className='rating-genre'>
            <div className='rating'>
              {vote_average} <i className='fa fa-star'></i>
            </div>
            <div className='genere'>
              {genres
                ? genres.map((genre) => (
                    <span key={genre.id}>{genre.name + " "}</span>
                  ))
                : null}
            </div>
          </div>
          <div className='overview'>
            <h3>OVERVIEW</h3>
            <p>{overview}</p>
          </div>
          <div className='cast'>
            <h3 className='cast'>TOP CASTS</h3>
            <div className='cast-grid'>
              {movieCast
                ? movieCast.map((cast) =>
                    cast.profile_path ? (
                      <div className='cast-item' key={cast.id}>
                        <img
                          alt='poster img'
                          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                        />
                        <div> {cast.name} </div>
                      </div>
                    ) : null
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
