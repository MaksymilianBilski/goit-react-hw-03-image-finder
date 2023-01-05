import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { src, alt, handleClick } = this.props;
    return (
      <li className={css.galleryItem} onClick={handleClick}>
        <img className={css.galleryImg} src={src} alt={alt} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  handleClick: PropTypes.func,
};
