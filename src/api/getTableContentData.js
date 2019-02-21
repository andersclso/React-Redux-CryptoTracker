import axios from 'axios';

export function getTableContentData(content) {

  let query = content.map((currency) => currency.id).join(',');

  return axios.get('https://www.stackadapt.com/coinmarketcap/quotes?id=' + query)
    .then((response) => {

      let data = response.data.data;
      let dataArray = [];

      for (let currency in data) {
        dataArray.push(data[currency]);
      }

      return dataArray;
    });
}

export function getDataOnOneCrypto(currency) {
  return axios.get('https://www.stackadapt.com/coinmarketcap/quotes?id=' + currency)
    .then(response => response.data.data[currency]);
}
