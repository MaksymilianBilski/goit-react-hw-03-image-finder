import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  src: PropTypes.string,
};
