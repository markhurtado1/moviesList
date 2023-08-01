import React from 'react';

function Movie( {setAllMovies, allMovies, movie, toggleWatch, index, setMovies} ) {

  const removeTitle = function(num) {
    event.preventDefault();
    setMovies(movies => [...movies.filter(select => select.key !== num)])
  }
  return (
    <div className='movie' >
      <h3 className='movieTitle'>{movie.title}
      </h3>
      <h2>{movie.key}</h2>
      <button onClick={() => removeTitle(movie.key)}>X</button>

    </div>
  )

}

export default Movie;