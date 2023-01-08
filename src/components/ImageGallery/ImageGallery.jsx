import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { items, handleClick } = this.props;
    return (
      <ul className={css.gallery}>
        {items.map(el => (
          <ImageGalleryItem
            handleClick={handleClick}
            src={el.webformatURL}
            alt={el.tags}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ webformatURL: PropTypes.string, tags: PropTypes.string })
  ),
  handleClick: PropTypes.func,
};
