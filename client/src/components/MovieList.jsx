import React from 'react';
import Movie from './Movie.jsx'


function MovieList( { setAllMovies, allMovies, movies, ToggleWatch, setMovies, SwitchWatched, removeTitle, seen, display } ) {

  const randomKey = function () {
    return Number(Math.floor(Math.random() * 1000));
  }

  if (movies.length === 0 ) {
    return (
      <div>
        <h1>Add some movies!</h1>
      </div>
    )
  }

  if (display === false && seen.length >= 1) {
    return (
      <div className='singleMovie'>
      {seen.map((movie) => (<Movie key={randomKey()}  movie={movie}  seen={seen} ToggleWatch={ToggleWatch} setMovies={setMovies} allMovies={allMovies} setAllMovies={setAllMovies} SwitchWatched={SwitchWatched} removeTitle={removeTitle}/>
      ))}
    </div>
    )
  }


  return (
  <div className='singleMovie'>
    {movies.map((movie) => (<Movie key={randomKey()}  seen={seen} movie={movie} ToggleWatch={ToggleWatch} setMovies={setMovies} allMovies={allMovies} setAllMovies={setAllMovies} SwitchWatched={SwitchWatched} removeTitle={removeTitle} display={display}/>
    ))}
  </div>
  )
};



export default MovieList;