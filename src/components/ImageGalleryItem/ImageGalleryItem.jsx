import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li class="gallery-item">
        <img
          onClick={this.props.handleCLick}
          src={this.props.src}
          alt={this.props.alt}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  pageURL: PropTypes.string,
};
