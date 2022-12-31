import { Component } from 'react';
import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  render() {
    const { largeImageURL, onClose, onKeyPress } = this.props;
    return (
      <div className={css.overlay} onClick={onClose} onKeyDown={onKeyPress}>
        <div className={css.modal}>
          <img src={largeImageURL} className={css.modalImg} alt="" />
        </div>
      </div>
    );
  }
}
