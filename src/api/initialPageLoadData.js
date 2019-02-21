import axios from 'axios';
import store from '../store';
import { populateList, populateTable } from '../actions';
import getCurrencyList from './getCurrencyList';
import { getTableContentData } from './getTableContentData';

export default async function initialPageLoadData() {

  let currency_list = await getCurrencyList();
  let defaultCurrencyContentData = await getTableContentData(currency_list.slice(0,5));
  console.log(defaultCurrencyContentData);

  store.dispatch(populateList(currency_list));
  store.dispatch(populateTable(defaultCurrencyContentData));
}
