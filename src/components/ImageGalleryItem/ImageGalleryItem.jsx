import PropTypes from 'prop-types';
const ImageGalleryItem = ({ images, togleModal}) => {
    if(images !== undefined || images.length > 0 ){
        
        return images.map((image,)=> {
                return <li onClick={()=>togleModal(image.webformatURL)} key={image.id} className="ImageGalleryItem">
              <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
            </li>
            });
    }
    return ;
};

ImageGalleryItem.propTypes = {
    images:PropTypes.arrayOf(PropTypes.shape({
        webformatURL:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
    })),
}

export default ImageGalleryItem;
