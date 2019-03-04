import * as types from '../actions';

const initialState = {
  content: []
}

export default function currencyTableReducer(state = initialState, action) {
  switch(action.type) {
    case types.POPULATE_TABLE:
      return { content: action.currencies }

    case types.ADD:
      return { content: [...state.content, action.currency] }

    case types.REMOVE:
      let copyArray = [...state.content];
      let index = state.content.findIndex(currency => currency.symbol === action.currency);
      copyArray.splice(index, 1);
      return { content: copyArray }

    case types.SORT_BY_RANK_ASCENDING:
      return { content: [...state.content].sort((a,b) => a.cmc_rank - b.cmc_rank) }

    case types.SORT_BY_RANK_DESCENDING:
      return { content: [...state.content].sort((a,b) => b.cmc_rank - a.cmc_rank) }

    case types.SORT_BY_PRICE_ASCENDING:
      return { content: [...state.content].sort((a,b) => a.quote.USD.price - b.quote.USD.price) }

    case types.SORT_BY_PRICE_DESCENDING:
      return { content: [...state.content].sort((a,b) => b.quote.USD.price - a.quote.USD.price) }
  }

  return state;
}
