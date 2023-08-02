import React from 'react';
import MovieList from './MovieList.jsx'
import Movie from './Movie.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import { useState } from 'react'


const App = () => {

  const randomKey = function () {
    return Number(Math.floor(Math.random() * 1000));
  }

  var moviesList = [
    {title: 'Mean Girls', key: randomKey()},
    {title: 'Hackers', key: randomKey()},
    {title: 'The Grey', key: randomKey()},
    {title: 'Sunshine', key: randomKey()},
    {title: 'Ex Machina', key: randomKey()},
  ]

  const [allMovies, setAllMovies] = useState(moviesList)
  const [movies, setMovies] = useState(moviesList)
  const [text, setText] = useState('')
  const [add, setAdd] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [seen, setSeen] = useState([]);
  const [notSeen, setNotSeen] = useState('')
  const [display, setDisplay] = useState(true)


  const newSearch = function (keyword) {
      event.preventDefault();
      console.log('moviesInSearch',movies)
      var searchResult2 = movies.filter(singlemovie => singlemovie.title.toLowerCase().includes(keyword.text.toLowerCase()));
      var result = []
      console.log('searchResult2', searchResult2)
      console.log(searchResult2)
      if (searchResult2.length === 0) {
        setMovies([{title: 'No movie by that name found'}]);
      } else {
        setMovies(searchResult2);
        setText('')
      }

    }

    const removeTitle = function(num) {
      event.preventDefault();
      setMovies(movies => [...movies.filter(select => select.key !== num)])
    }

    const clearSearch = function () {
      setMovies(allMovies)
    }


  const ToggleWatch = function () {
    setDisplay(false);
    console.log("toggle")
  }

  const ToggleWatchTrue = function () {
    setDisplay(true);
  }

  const SwitchWatched = function (movie) {
    console.log('horayyy', movie)
    setSeen(seen => [...seen, movie])
    console.log("seen", seen)
    removeTitle(movie.key);

  }




  const newAdd = function (input) {
    setAllMovies(allMovies => [...allMovies, {title: input.add, key: randomKey()}])
    setMovies(movies => [...movies, {title: input.add, key: randomKey()}])
  }

  return (
    <div className='container'>
      <div className='topBar'>
          <div className='search'>Search</div>
          <Search text={text} setText={setText} newSearch={newSearch}  clearSearch={clearSearch} movies={movies} setMovies={setMovies} searchResults={searchResults} setSearchResults={setSearchResults} className='searchBar'/>
          <div className='addMovie'> <br></br>Add Movie</div>
          <AddMovie add={add} setAdd={setAdd} newAdd={newAdd}  className='addMovieBar'/>
      </div>
      <h1 className='movieList'>Movie List</h1>
      <div className='toggleWatchIcons'>
            <button className='toWatch' onClick={()=> ToggleWatchTrue()}>To Watch</button>
            <button className='watched' onClick={()=> ToggleWatch()}>Watched</button>
      </div>
      <MovieList movies={movies} setMovies={setMovies} ToggleWatch={ToggleWatch} allMovies={allMovies} setAllMovies={setAllMovies} SwitchWatched={SwitchWatched} removeTitle={removeTitle} seen={seen} display={display}/>

    </div>
  );
  };

export default App;