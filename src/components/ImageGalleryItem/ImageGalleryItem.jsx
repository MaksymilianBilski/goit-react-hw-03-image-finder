import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img
          className={css.galleryImg}
          onClick={this.props.handleCLick}
          src={this.props.src}
          alt={this.props.alt}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
