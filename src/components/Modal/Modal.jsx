import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  handleKeyDown = e => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        return this.props.onClose(evt);
      }
    });
  };

  render() {
    const { largeImageURL, onClose } = this.props;
    return (
      <div>
        <div onClick={onClose} className={css.overlay}></div>
        <div onKeyDown={this.handleKeyDown()}>
          <div className={css.modal}>
            <img src={largeImageURL} className={css.modalImg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};
