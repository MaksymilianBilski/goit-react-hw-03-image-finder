import axios from 'axios';

export async function fetchPhotos(searchParams) {
  axios.defaults.baseURL = `https://pixabay.com/api/`;
  const response = await axios.get(axios.defaults.baseURL + `?${searchParams}`);
  return response;
}

// export async function search() {
//   const searchParams = new URLSearchParams({
//     q: this.state.query,
//     page: this.state.page,
//     key: '30839127-8a41b37b8b94b94b2633e44b5',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: this.elementsPerPage,
//   });
//   axios.defaults.baseURL = `https://pixabay.com/api/`;
//   const response = await axios.get(axios.defaults.baseURL + `?${searchParams}`);
//   this.setState({
//     images: response.data.hits,
//   });
//   if (response.data.hits.length < 12) {
//     this.setState({ showBtn: false });
//   }
//   if (response.data.hits.length === 12) {
//     this.setState({ showBtn: true });
//   }
//   if (response.data.hits.length >= 1) {
//     this.setState({ isLoading: false });
//   }
// }
