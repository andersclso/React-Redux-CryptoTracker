import axios from 'axios';

export default function getCurrencyList() {
  return axios.get('https://www.stackadapt.com/coinmarketcap/map')
    .then(response => response.data.data);
}
