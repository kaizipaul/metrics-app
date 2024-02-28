import React, { useState } from 'react';

// TO DO
// 1. Create search reducer and add it to the store
// 2. in this searchbar, the user should search for character, locations soon
// 3. search results should redirect to detailsPage.jsx

const Search = () => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>Search</h1>
      <input type="text" value={input} onChange={handleSearch} />
    </>
  );
};

export default Search;
