import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.imgClick = this.imgClick.bind(this);
  }
  dataSource = '';
  imgClick = el => {
    this.props.items.map(element => {
      console.log(this.dataSource);
      if (element.previewURL === el.target.src) {
        return (this.dataSource = element.webformatURL);
      }
    });
  };
  render() {
    const { items } = this.props;
    return (
      <ul class="gallery">
        {items.map(el => (
          <ImageGalleryItem
            handleCLick={this.imgClick}
            dataSource={this.dataSource}
            src={el.previewURL}
            alt={el.tags}
          />
        ))}
      </ul>
    );
  }
}
