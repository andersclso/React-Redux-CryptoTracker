import axios from 'axios';
import store from '../store';
import { populateList, populateTable } from '../actions';
import getCurrencyData from './getCurrencyData';

export default async function initialPageLoadData() {

  let currency_data = await getCurrencyData(1, 10);
  console.log(currency_data);

  let initialTableCurrencies = currency_data.slice(0,5);

  store.dispatch(populateList(currency_data));
  store.dispatch(populateTable(initialTableCurrencies));
}
