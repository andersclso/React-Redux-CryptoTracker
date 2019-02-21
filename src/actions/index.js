// LIST ACTIONS TYPES
export const POPULATE_LIST = 'POPULATE_LIST';
export const ADD = 'ADD';
// TABLE ACTION TYPES
export const POPULATE_TABLE = 'POPULATE_TABLE';
export const REMOVE = 'REMOVE';
export const SORT_BY_RANK = 'SORT_BY_RANK';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

// LIST ACTION CREATORS
export function populateList(currencies) {
  return {
    type: POPULATE_LIST,
    currencies
  }
}

export function add(currency) {
  return {
    type: ADD,
    currency
  }
}

// TABLE ACTION CREATORS
export function populateTable(currencies) {
  return {
    type: POPULATE_TABLE,
    currencies
  }
}

export function remove(currency) {
  return {
    type: REMOVE,
    currency
  }
}

export function sortByRank(sortBy) {
  return {
    type: SORT_BY_RANK,
    sortBy
  }
}

export function sortByPrice(sortBy) {
  return {
    type: SORT_BY_PRICE,
    sortBy
  }
}
