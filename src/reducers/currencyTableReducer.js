import * as types from '../actions';

const initialState = {
  content: []
}

export default function currencyTableReducer(state = initialState, action) {
  switch(action.type) {
    case types.POPULATE_TABLE:
      return { content: action.currencies }

    case types.ADD:
      if (state.content.length === 10) {
        return alert('can only track maximum of 10 currencies!');
      }

      return { content: [...state.content, action.currency] }

    case types.REMOVE:
      if (state.content.length === 1) {
        return alert('must be tracking atleast 1 currency!');
      }

      let copyArray = [...state.content];
      let index = state.content.findIndex(currency => currency.symbol === action.currency);
      copyArray.splice(index, 1);
      return { content: copyArray }

    case types.SORT_BY_RANK:
      return { content: [...state.content].sort((a,b) => a.cmc_rank - b.cmc_rank) }

    case types.SORT_BY_PRICE:
      return { content: [...state.content].sort((a,b) => a.quote.USD.price - b.quote.USD.price)}
  }

  return state;
}
