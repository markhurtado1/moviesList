import React from 'react';

function AddMovie ( { add, setAdd, newAdd, randomKey} ) {
  return (
    <div className='addBar'>
      <input type="text" value={add} onChange={(event) => {
      setAdd(event.target.value)
      }} />
      <button className="addBtn" onClick={(event) => {
        console.log('click')
        event.preventDefault();
        newAdd( {add} );
        setAdd('');
      }}> Add</button>
    </div>
  )
};

export default AddMovie;