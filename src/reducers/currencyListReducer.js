import * as types from '../actions';

const initialState = {
  currencies: []
}

export default function currencyListReducer(state = initialState, action) {
  switch(action.type) {
    case types.POPULATE_LIST:
      return {...state, currencies: action.currencies}
  }

  return state;
}
