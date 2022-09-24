import PropTypes from 'prop-types';

const Button = ({ images, loadMore }) => {
  if (images.length !== 0) {
    return (
      <div className="btn-container">
        <button onClick={loadMore} className="Button" type="button">
          Load more
        </button>
      </div>
    );
  }

  return;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
