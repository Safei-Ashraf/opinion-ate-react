import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/MtTKbtwHGxGqhif4UDlk0icYs3Fymc85',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(response => response.data);
  },
};

export default api;
