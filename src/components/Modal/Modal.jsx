import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModalWindow, ImageInModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.closeByESC);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeByESC);
  };

  closeByESC = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { modalImage, closeModal } = this.props;
    return createPortal(
      <Overlay
        onClick={e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        <ModalWindow>
          <ImageInModal src={modalImage} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
