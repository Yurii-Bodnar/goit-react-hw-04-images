import Button from 'components/Button/Button';
import { Component } from 'react';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    page: 1,
    perPage: 12,
    images: [],
    loading: false,
    isModalOpen: false,
    modalData: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '29465886-f70572c8b9c11640077f8b34a';
    if (
      prevProps.imagesName !== this.props.imagesName ||
      prevState.page < this.state.page
    ) {
      const page =
        prevProps.imagesName !== this.props.imagesName ? 1 : this.state.page;
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imagesName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
        .then(res => res.json())
        .then(images =>
          this.setState(prew => ({
            images:
              prevProps.imagesName !== this.props.imagesName
                ? images.hits
                : [...prew.images, ...images.hits],
            page: page,
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  togleModal = (modalData = null) =>{
 this.setState(prew =>({isModalOpen:!prew.isModalOpen,modalData,}))
  }

  hendlerLoadMore = () => {
    this.setState(prew => ({ page: prew.page + 1 }));
  };

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.loading && <Loader />}
        <ImageGalleryItem images={this.state.images} togleModal={this.togleModal} />
        <Button images={this.state.images} loadMore={this.hendlerLoadMore} />
        {this.state.isModalOpen && <Modal  modalData={this.state.modalData} togleModal={this.togleModal}/>}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
    imagesName:PropTypes.string.isRequired,
    page: PropTypes.number,
}

export default ImageGallery;
