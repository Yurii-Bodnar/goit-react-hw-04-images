import { useState } from 'react';
import './../styles.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';

export const App = () => {
  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(1);
  const handleFormSubmit = newImagesName => {
    if (newImagesName === imagesName) {
      Notiflix.Notify.warning('Enter a new request');
      return;
    }
    setImagesName(newImagesName);
    if (page !== 1) {
      setPage(1);
    }
  };
  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery imagesName={imagesName} page={page} setPage={setPage} />
    </div>
  );
};
