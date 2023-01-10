import axios from 'axios';

export async function fetchPhotos(query, page) {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    key: '30839127-8a41b37b8b94b94b2633e44b5',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  axios.defaults.baseURL = `https://pixabay.com/api/`;
  const response = await axios.get(axios.defaults.baseURL + `?${searchParams}`);
  return response;
}
