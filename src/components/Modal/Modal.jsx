import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('modal');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown',this.closeModal)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.closeModal)
    }
     closeModal = (e) => {
        if(e.target === e.currentTarget || e.code === 'Escape'){
            this.props.togleModal()
        }
    }
render(){
    return createPortal(
        <div className="Overlay" onClick={this.closeModal}>
          <div className="Modal">
            <img src={this.props.modalData} alt="" />
          </div>
        </div>,
        modalContainer
      );
}
};
 
Modal.propTypes = {
    modalData:PropTypes.string.isRequired, 
}

export default Modal;
