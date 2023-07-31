import React from 'react';

function Movie( {allMovies, movie, toggleWatch} ) {

  const removeTitle = function(key) {
    console.log("helloo im removoed")
    const filteredResults = allMovies.filter(movie => movie.key !== key)
    setAllMovies(filteredResults)
  }
  return (
    <div className='movie' onDoubleClick={() =>
    toggleWatch(movie.title)}>
      <h3 className='movieTitle'>{movie.title}
      </h3>
      <button onClick={() => removeTitle(movie.key)}>X</button>

    </div>
  )

}

export default Movie;