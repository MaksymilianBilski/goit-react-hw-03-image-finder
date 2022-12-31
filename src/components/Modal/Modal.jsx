import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import * as basicLightbox from 'basiclightbox';

export class Modal extends Component {
  render() {
    const { item } = this.props;
    return (
      <div class="overlay">
        modal
        <div class="modal">
          <img src={this.props.item.previewURL} alt="" />
        </div>
      </div>
    );
  }
}
