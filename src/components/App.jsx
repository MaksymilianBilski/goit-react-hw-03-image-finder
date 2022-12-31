import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Component } from 'react';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      page: 1,
      elementsPerPage: 12,
      images: [],
      modalFormatSrc: '',
      isModalOpen: false,
      showBtn: false,
      key: '30839127-8a41b37b8b94b94b2633e44b5',
    };
    this.onPageChange = this.onPageChange.bind(this);
  }
  componentDidCatch(error, info) {
    console.log('error: ' + error);
    console.log('info: ' + info);
  }

  onSubmit = evt => {
    if (evt === undefined) {
      return;
    }
    evt.preventDefault();
    this.setState({
      query: evt.target.children[1].value,
      elementsPerPage: 12,
      isModalOpen: false,
      modalFormatSrc: '',
      showBtn: true,
    });
  };

  onPageChange = () => {
    this.setState({
      page: this.state.page + 1,
      elementsPerPage: this.state.elementsPerPage + 12,
    });
  };

  onImageClick = el => {
    this.state.images.map(element => {
      if (element.webformatURL === el.target.src) {
        this.setState({
          isModalOpen: true,
          images: [element],
          modalFormatSrc: element.largeImageURL,
        });
      }
    });
  };

  onModalClose = e => {
    if (e.target.nodeName !== 'IMG') {
      this.setState({ isModalOpen: false });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    let URL =
      (axios.defaults.baseURL = `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.elementsPerPage}`);
    const response = await axios.get(URL);
    if (this.state.images.length < 12) {
      this.setState({ showBtn: false });
    }
    if (this.state.images.length === 12) {
      this.setState({ showBtn: true });
    }

    if (prevState.images === this.state.images) {
      this.setState({
        images: response.data.hits,
      });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          items={this.state.images}
          handleClick={this.onImageClick}
        />
        {this.state.showBtn && <Button handleClick={this.onPageChange} />}
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.state.modalFormatSrc}
            onClose={this.onModalClose}
            onKeyPress={window.addEventListener('keydown', e => {
              if (e.code === 'Escape') {
                this.setState({ isModalOpen: false });
              }
            })}
          />
        )}
      </>
    );
  }
}
