import axios from 'axios';

export default async function getCurrencyData(start, limit) {
  let currency_ids = await axios.get('https://www.stackadapt.com/coinmarketcap/map', {
    params: {
      start,
      limit
    }
  }).then(response => response.data.data.map(currency => currency.id).join(','))
    .catch(error => console.log(error));

  return axios.get('https://www.stackadapt.com/coinmarketcap/quotes?id=' + currency_ids)
    .then((response) => {

      let data = response.data.data;
      let dataArray = [];

      for (let currency in data) {
        dataArray.push(data[currency]);
      }

      return dataArray;
    })
    .catch(error => console.log(error));;
}
