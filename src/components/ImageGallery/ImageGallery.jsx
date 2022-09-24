import Button from 'components/Button/Button';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

const ImageGallery = ({ imagesName, page, setPage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const API_KEY = '29465886-f70572c8b9c11640077f8b34a';

  useEffect(() => {
    if (imagesName !== '') {
      setLoading(true);
      fetch(
        `https://pixabay.com/api/?q=${imagesName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())

        .then(images => {
          if (images.hits.length === 0) {
            Notiflix.Notify.warning('No pictures found, try again');
            return;
          }
          setImages(prew => {
            return page === 1 ? images.hits : [...prew, ...images.hits];
          });
        })
        .finally(() => setLoading(false));
    }
  }, [imagesName, page]);

  const hendlerLoadMore = () => {
    setPage(page + 1);
  };

  const togleModal = (modalData = null) => {
    setIsModalOpen(prew => !prew);
    setModalData(modalData);
  };

  return (
    <>
      <ul className="ImageGallery">
        {loading && <Loader />}
        <ImageGalleryItem images={images} togleModal={togleModal} />

        {isModalOpen && <Modal modalData={modalData} togleModal={togleModal} />}
      </ul>
      <Button images={images} loadMore={hendlerLoadMore} />
    </>
  );
};

ImageGallery.propTypes = {
  imagesName: PropTypes.string.isRequired,
  page: PropTypes.number,
};

export default ImageGallery;
