import React from 'react';
import MovieList from './MovieList.jsx'
import Movie from './Movie.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import { useState } from 'react'



// var allAddedMovies = [{title:''}];


const App = () => {
  var moviesList = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]


  const [allMovies, setAllMovies] = useState(moviesList)
  const [movies, setMovies] = useState(moviesList)
  const [text, setText] = useState('')
  const [add, setAdd] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const newSearch = function (keyword) {
    // console.log('newSearch', keyword);
    // console.log('keyword.text = ', keyword.text)
    // console.log('movies', moviesList)
    event.preventDefault();
    //setMovies(moviesList.filter(movie => movie.title.toLowerCase() === keyword.text.toLowerCase()));
    //setMovies(moviesList.filter(movie => movie.title.toLowerCase().includes(keyword.text.toLowerCase())));
    // var searchResult = moviesList.filter(movie => movie.title.toLowerCase().includes(keyword.text.toLowerCase()));
    // if (searchResult.length === 0) {
      //setMovies([{title: 'No movie by that name found'}]);

      // BROKEN
      console.log('moviesInSearch',movies)
      var searchResult2 = movies.filter(singlemovie => singlemovie.title.toLowerCase().includes(keyword.text.toLowerCase()));
      var result = []
      console.log('searchResult2', searchResult2)
      console.log(searchResult2)
      if (searchResult2 === 0) {
        setMovies([{title: 'No movie by that name found'}]);
      } else {
        setMovies(searchResult2);
        setText('')
      }

    }

    const clearSearch = function () {
      setMovies(allMovies)
    }
    // else {
  //     setMovies(searchResult);
  //   }
  // }

  // const newSearch2 = function (keyword) {
  //   console.log('newSearch', keyword);
  //   console.log('keyword.text = ', keyword.text)
  //   console.log('movies', moviesList)
  //   console.log('movies title', moviesList[1].title)
  //   event.preventDefault();
  //   //setMovies(moviesList.filter(movie => movie.title.toLowerCase() === keyword.text.toLowerCase()));
  //   //setMovies(moviesList.filter(movie => movie.title.toLowerCase().includes(keyword.text.toLowerCase())));
  //   var searchResult2 = allMovies.filter(movie => movie.title.toLowerCase().includes(keyword.text.toLowerCase()))
  //   if (searchResult2.length === 0) {
  //     setMovies([{title: 'No movie by that name found'}]);
  //   } else {
  //     setMovies(searchResult2);
  //   }
  // }


  const ToggleWatch = function (movie) {
    console.log(movie)
    //movie.watched

  }


  const newAdd = function (input) {
    setAllMovies(allMovies => [...allMovies, {title: input.add}])
    setMovies(movies => [...movies, {title: input.add}])
    // const [movies, setMovies] = useState(moviesList)
    // console.log('newMovie', input);
    // console.log('newMovie.add', input.add)
    // console.log('added', add)
    // console.log('setadd', setAdd)
    // console.log(allMovies)
    // console.log(movies)
    // event.preventDefault();
    // var newTitle = {}
    // newTitle.title = input.add
      // return setMovies((movies) => {
      //   return { ...movies, ...{title: input.add} };
      // });

      // return setAllMovies((movies) => {
      //   return { ...movies, ...{title: input.add} };
      // });


    // Uses Hardcoded data- only could add one movie or would duplicate new movie when adding
    // var newTitle ={};
    // newTitle.title = input.add
    // console.log(newTitle);
    // //moviesList.push(newTitle)
    // console.log('movieList.push', newTitle)
    // //setMovies(moviesList)
    // var index = moviesList.length
    // console.log('index', index)
    // moviesList[index] = newTitle;
    // console.log('mL[Index]', moviesList)
    // setMovies(moviesList)

  }


  return (
    <div className='container'>
      <div className='topBar'>
          <div className='search'>Search</div>
          <Search text={text} setText={setText} newSearch={newSearch}  clearSearch={clearSearch} movies={movies} setMovies={setMovies} searchResults={searchResults} setSearchResults={setSearchResults} className='searchBar'/>
          <div className='addMovie'> <br></br>Add Movie</div>
          <AddMovie add={add} setAdd={setAdd} newAdd={newAdd} className='addMovieBar'/>
      </div>
      <h1 className='movieList'>Movie List</h1>
      <div className='toggleWatchIcons'>
            <div className='watched'>Watched</div>
            <div className='toWatch'>To Watch</div>
      </div>
      <MovieList movies={movies} setMovies={setMovies} toggleWatch={ToggleWatch} allMovies={allMovies} setAllMovies={setAllMovies}/>

    </div>
  );
  };

export default App;