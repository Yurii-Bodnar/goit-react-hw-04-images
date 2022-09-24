import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('modal');
const Modal = ({ modalData, togleModal }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      togleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalData} alt="" />
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  modalData: PropTypes.string,
};
export default Modal;

