import React from 'react';
import Movie from './Movie.jsx'


function MovieList( { setAllMovies, allMovies, movies, toggleWatch, setMovies } ) {

  const randomKey = function () {
    return Number(Math.floor(Math.random() * 1000));
  }

  return (
  <div className='singleMovie'>
    {movies.map((movie) => (<Movie key={randomKey()}  movie={movie} toggleWatch={toggleWatch} setMovies={setMovies} allMovies={allMovies} setAllMovies={setAllMovies}/>
    ))}
  </div>
  )
};



export default MovieList;