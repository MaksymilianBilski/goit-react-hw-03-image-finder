import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Component } from 'react';
import { fetchPhotos } from '../components/services/fetchPhotos';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      page: 1,
      images: [],
      modalFormatSrc: '',
      isModalOpen: false,
      showBtn: false,
      isLoading: false,
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  onSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.search.value,
      isModalOpen: false,
      modalFormatSrc: '',
      isLoading: true,
      images: [],
    });
    this.search(evt.target.search.value, this.state.page);
  };

  onPageChange = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
    this.search(this.state.query, this.state.page + 1);
  };

  onImageClick = src => {
    const modalFormat = this.state.images.find(
      el => el.webformatURL === src.target.src
    );
    this.setState({
      isModalOpen: true,
      modalFormatSrc: modalFormat.largeImageURL,
    });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  async search(query, page) {
    const response = await fetchPhotos(query, page);
    this.setState(prevState => {
      return {
        images: [...prevState.images, ...response.data.hits],
      };
    });
    if (response.data.hits.length < 12) {
      this.setState({ showBtn: false });
    }
    if (response.data.hits.length === 12) {
      this.setState({ showBtn: true });
    }
    if (response.data.hits.length >= 1 || response.data.hits.length === 0) {
      this.setState({ isLoading: false });
    }
    if (response.data.hits.length === 0) {
      Notify.failure("Didn't find any matches!");
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
        {this.state.isLoading && <Loader />}
        {this.state.showBtn && <Button handleClick={this.onPageChange} />}
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.state.modalFormatSrc}
            onClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}
