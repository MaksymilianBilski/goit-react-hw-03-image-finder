import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      images: [],
      query: '',
      maxPages: 12,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }
  onSubmit = evt => {
    if (evt === undefined) {
      return;
    }
    evt.preventDefault();
    this.setState(prevState => {
      return { prevState, query: evt.target.children[1].value, maxPages: 12 };
    });
  };
  onPageChange = () => {
    console.log(this.state.page);
    this.setState(prevState => ({
      prevState,
      page: this.state.page + 1,
      maxPages: this.state.maxPages + 12,
    }));
  };
  async componentDidUpdate(prevProps, prevState) {
    const key = '30839127-8a41b37b8b94b94b2633e44b5';
    let URL =
      (axios.defaults.baseURL = `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${this.state.maxPages}`);
    const response = await axios.get(URL);
    if (prevState.images === this.state.images) {
      this.setState(prevState => ({ prevState, images: response.data.hits }));
    }
    const images = response.data.hits;
    return images;
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery items={this.state.images}/>
        <Button handleClick={this.onPageChange} />
        <Modal item={this.state.images} />
      </>
    );
  }
}
