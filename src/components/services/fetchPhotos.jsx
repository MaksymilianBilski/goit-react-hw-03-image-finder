import axios from 'axios';

export async function fetchPhotos(searchParams) {
  axios.defaults.baseURL = `https://pixabay.com/api/`;
  const response = await axios.get(axios.defaults.baseURL + `?${searchParams}`);
  return response;
}
