import React from 'react';

function Search( { text, setText, newSearch, clearSearch, setMovies, movies, searchResults, setSearchResults } ) {
  return (
    <div className='searchBar'>
      <input type="text" value={text} onChange={(event) => {
      setText(event.target.value)
      }} />
      <button className="searchBtn" onClick={(event) => {
        console.log('click')
        event.preventDefault();
        newSearch( {text} );
        setText('');
      }}> Go</button>
      <button className="clearBtn" onClick={(event) => {
        clearSearch();
      }}>Clear</button>
    </div>
  )
}

export default Search;