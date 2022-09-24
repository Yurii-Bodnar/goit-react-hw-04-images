import { useState } from 'react';
import './../../styles.css';
import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [imagesName, setImagesName] = useState('');

  const handleSearch = e => {
    setImagesName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (imagesName.trim() === '') {
      Notiflix.Notify.failure('Please fill in the search field');
      return;
    }
    setImagesName('');
    onSubmit(imagesName);
  };
  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button ">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleSearch}
          className="SearchForm-input"
          name="imagesName"
          value={imagesName}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
