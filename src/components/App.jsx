import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import { fetchPhotos } from '../components/services/fetchPhotos';

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
  elementsPerPage = 12;

  onSubmit = evt => {
    evt.preventDefault();
    this.elementsPerPage = 12;
    this.setState({
      query: evt.target.search.value,
      isModalOpen: false,
      modalFormatSrc: '',
      showBtn: true,
      isLoading: true,
    });
    this.search(this.elementsPerPage, evt.target.search.value, this.state.page);
  };

  onPageChange = () => {
    this.elementsPerPage = this.elementsPerPage + 12;
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
    this.search(this.elementsPerPage, this.state.query, this.state.page + 1);
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

  onModalClose = e => {
    this.setState({ isModalOpen: false });
  };

  async search(elementsPerPage, query, page) {
    const response = await fetchPhotos(elementsPerPage, query, page);
    this.setState({
      images: response.data.hits,
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
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          items={this.state.images}
          handleClick={this.onImageClick}
        />
        {this.state.isLoading ?? (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            wrapperClass=""
            visible={true}
          />
        )}
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
