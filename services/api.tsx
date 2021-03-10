import axios from 'axios';

let url = '';
if (__DEV__) {
  url = 'https://run.mocky.io/v3/75a7441d-531f-4390-b8a9-9372d6b63bd3';
} else {
  url = '<<prodURL>>';
}

const api = axios.create({
  baseURL: url,
});

export default api;
