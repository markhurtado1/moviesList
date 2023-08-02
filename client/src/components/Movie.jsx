import React from 'react';

function Movie( {setAllMovies, allMovies, movie, ToggleWatch, index, setMovies, SwitchWatched, removeTitle, seen, display, singleSeen} ) {

  // const removeTitle = function(num) {
  //   event.preventDefault();
  //   setMovies(movies => [...movies.filter(select => select.key !== num)])
  // }

  // if ( display === false && seen.length > 1) {
  //   return (
  //     <div className='movie' onDoubleClick={() => {
  //       SwitchWatched(seen)
  //       console.log("singleSeen", singleSeen)
  //     }}>
  //       <h3 className='movieTitle'>{singleSeen.title}
  //       </h3>
  //       <button onClick={() => removeTitle(singleSeen.key)}>X</button>
  //       <button onClick={() => SwitchWatched(singleSeen)}>Watched</button>
  //     </div>
  //   )
  // }
  return (
    <div className='movie' onDoubleClick={() => {
      SwitchWatched(movie)
    }}>
      <h3 className='movieTitle'>{movie.title}
      </h3>
      <button onClick={() => removeTitle(movie.key)}>X</button>
      <button onClick={() => SwitchWatched(movie)}>Watched</button>
    </div>
  )

}

export default Movie;