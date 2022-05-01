import React, { useState } from 'react';
import './SearchBox.scss';

const genres = [
  'action',
  'thriller',
  'comedy',
  'crime',
  'scifi',
  'drama',
  'adventure',
  'biography',
  'sport',
  'mystery',
  'sport',
  'history',
];

function Search(props: any) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
    props.search('');
  };

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    props.search(searchValue);
  };

  return (
    <div className="searchBox__container">
      <div className="searchBox__wrapper">
        <form>
          <input
            className="searchBox__input"
            name="focus"
            value={searchValue}
            onChange={handleSearchInputChanges}
            required
            placeholder="Enter search term"
          />
          <div className="searchBox__close-icon" onClick={resetInputField}>
            x
          </div>
        </form>
      </div>
      <div className="searchBox__submit" onClick={callSearchFunction}>
        SEARCH
      </div>
    </div>
  );
}

export default Search;
