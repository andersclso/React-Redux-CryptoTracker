// LIST ACTIONS TYPES
export const POPULATE_LIST = 'POPULATE_LIST';
export const ADD = 'ADD';
// TABLE ACTION TYPES
export const POPULATE_TABLE = 'POPULATE_TABLE';
export const REMOVE = 'REMOVE';
export const SORT_BY_RANK_ASCENDING = 'SORT_BY_RANK_ASCENDING';
export const SORT_BY_RANK_DESCENDING = 'SORT_BY_RANK_DESCENDING';
export const SORT_BY_PRICE_ASCENDING = 'SORT_BY_PRICE_ASCENDING';
export const SORT_BY_PRICE_DESCENDING = 'SORT_BY_PRICE_DESCENDING';

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

export function sortByRank(ascending) {
  return {
    type: ascending ? SORT_BY_PRICE_ASCENDING : SORT_BY_PRICE_DESCENDING
  }
}

export function sortByPrice(ascending) {
  return {
    type: ascending ? SORT_BY_RANK_ASCENDING : SORT_BY_RANK_DESCENDING
  }
}
