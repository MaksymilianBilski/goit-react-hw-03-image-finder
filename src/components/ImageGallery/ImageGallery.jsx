import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { items, handleClick } = this.props;
    return (
      <ul className={css.gallery} onClick={handleClick}>
        {items.map(el => (
          <ImageGalleryItem src={el.webformatURL} alt={el.tags} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.array,
};
