import React from 'react';
import { MainContext, useContext } from '../context';

function Search() {
    const {search, setSearch} = useContext(MainContext)  


  return (
      <form className='search-form'>
          <input placeholder="Bitcoin..." className='search-input' onChange={e => setSearch(e.target.value)} value={search} />
      </form>
  );
}

export default Search;
