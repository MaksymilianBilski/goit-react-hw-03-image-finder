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
      <div
        className={css.overlay}
        onClick={onClose}
        onKeyDown={this.handleKeyDown()}
      >
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
