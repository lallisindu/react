import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div>
        
      Search Notes:<input type="text" placeholder="Search notebooks" onChange={handleSearch} />
    </div>
  );
};

export default Search;
